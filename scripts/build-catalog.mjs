import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const promptsRoot = path.join(root, "prompts");
const output = path.join(root, "catalog", "prompts.json");

function parseScalar(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith("\"") && trimmed.endsWith("\"")) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed;
}

function markdownFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(file);
    if (entry.isFile() && entry.name.endsWith(".md") && !entry.name.startsWith("_")) return [file];
    return [];
  });
}

function parseEntry(file) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.startsWith("---\n")) throw new Error(`${file}: frontmatter must start with ---`);
  const end = text.indexOf("\n---", 4);
  if (end === -1) throw new Error(`${file}: frontmatter closing --- is missing`);

  const values = {};
  let section = null;
  for (const line of text.slice(4, end).split("\n")) {
    if (!line.trim()) continue;
    const property = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):(?:\s+(.*))?$/);
    if (property) {
      section = property[1];
      values[section] = parseScalar(property[2] ?? "");
      continue;
    }
    const nested = line.match(/^\s{2}([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (nested) {
      if (!values[section] || typeof values[section] !== "object" || Array.isArray(values[section])) values[section] = {};
      values[section][nested[1]] = parseScalar(nested[2]);
      continue;
    }
    const arrayItem = line.match(/^\s{2}-\s+(.+)$/);
    if (arrayItem && section) {
      if (!Array.isArray(values[section])) values[section] = [];
      values[section].push(parseScalar(arrayItem[1]));
    }
  }

  const prompt = text.slice(end + 4).trim();
  const filePath = path.relative(root, file).replaceAll(path.sep, "/");
  const description = values.description ?? values.summary ?? {};
  return {
    ...values,
    description,
    prompt,
    file: filePath
  };
}

const entries = markdownFiles(promptsRoot)
  .map(parseEntry)
  .filter((entry) => entry.status === "published")
  .sort((a, b) =>
    String(a.industry ?? "").localeCompare(String(b.industry ?? "")) ||
    String(a.category ?? "").localeCompare(String(b.category ?? "")) ||
    String(a.slug ?? "").localeCompare(String(b.slug ?? ""))
  )
  .map((entry) => ({
    slug: entry.slug,
    model: entry.model,
    industry: entry.industry,
    category: entry.category,
    title: entry.title,
    description: entry.description,
    prompt: entry.prompt,
    tags: entry.tags ?? [],
    artifact: entry.artifact,
    source: entry.source,
    status: entry.status,
    featured: entry.featured ?? false,
    captured_at: entry.captured_at,
    file: entry.file
  }));

const catalog = {
  schemaVersion: "1.0",
  kind: "video-prompt-library",
  repository: "https://github.com/flatkey-ai/awesome-seedance-prompts",
  generatedFrom: "prompts/**/*.md",
  entries
};

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`✓ wrote catalog/prompts.json with ${entries.length} published entr${entries.length === 1 ? "y" : "ies"}`);
