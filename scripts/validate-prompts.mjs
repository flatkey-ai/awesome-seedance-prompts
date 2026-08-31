import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const promptsRoot = path.join(root, "prompts");
const allowedCategories = new Set([
  "action",
  "cinematic",
  "commercial",
  "pov-fpv",
  "reference-driven",
  "surreal-vfx",
  "character-consistency",
  "storyboard",
  "music-video",
  "transition",
]);
const allowedStatuses = new Set(["draft", "published", "archived"]);

function markdownFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(file);
    if (entry.isFile() && entry.name.endsWith(".md") && !entry.name.startsWith("_")) return [file];
    return [];
  });
}

function parseFrontmatter(file) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.startsWith("---\n")) throw new Error("frontmatter must start with ---");
  const end = text.indexOf("\n---", 4);
  if (end === -1) throw new Error("frontmatter closing --- is missing");
  const frontmatter = text.slice(4, end).split("\n");
  const values = {};
  let section = null;
  for (const line of frontmatter) {
    if (!line.trim()) continue;
    const property = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):(?:\s+(.*))?$/);
    if (property) {
      section = property[1];
      const value = property[2] ?? "";
      values[section] = value.replace(/^['\"]|['\"]$/g, "");
      continue;
    }
    const nested = line.match(/^\s{2}([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (nested) {
      if (!values[section] || typeof values[section] !== "object") values[section] = {};
      values[section][nested[1]] = nested[2].replace(/^['\"]|['\"]$/g, "");
      continue;
    }
    const arrayItem = line.match(/^\s{2}-\s+(.+)$/);
    if (arrayItem && section) {
      if (!Array.isArray(values[section])) values[section] = [];
      values[section].push(arrayItem[1].replace(/^['\"]|['\"]$/g, ""));
    }
  }
  const prompt = text.slice(end + 4).trim();
  return { values, prompt };
}

const files = markdownFiles(promptsRoot);
const slugs = new Map();
const errors = [];

for (const file of files) {
  const relative = path.relative(root, file);
  try {
    const { values, prompt } = parseFrontmatter(file);
    const required = ["slug", "model", "category", "title", "source", "status"];
    for (const field of required) {
      if (!values[field] || (typeof values[field] === "object" && Object.keys(values[field]).length === 0)) {
        errors.push(`${relative}: missing ${field}`);
      }
    }
    if (typeof values.slug === "string" && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(values.slug)) {
      errors.push(`${relative}: slug must be lowercase kebab-case`);
    }
    if (slugs.has(values.slug)) errors.push(`${relative}: duplicate slug ${values.slug} (also ${slugs.get(values.slug)})`);
    if (values.slug) slugs.set(values.slug, relative);
    if (!allowedCategories.has(values.category)) errors.push(`${relative}: unsupported category ${values.category}`);
    if (!allowedStatuses.has(values.status)) errors.push(`${relative}: unsupported status ${values.status}`);
    if (!prompt) errors.push(`${relative}: prompt body is empty`);
    if (typeof values.title === "object" && !values.title.en) errors.push(`${relative}: title.en is required`);
    if (typeof values.source === "object") {
      for (const field of ["label", "platform", "url", "license"]) {
        if (!values.source[field]) errors.push(`${relative}: source.${field} is required`);
      }
    }
  } catch (error) {
    errors.push(`${relative}: ${error.message}`);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `✗ ${error}`).join("\n"));
  process.exit(1);
}

console.log(`✓ validated ${files.length} prompt file${files.length === 1 ? "" : "s"}`);
