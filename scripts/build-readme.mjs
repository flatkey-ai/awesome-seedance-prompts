import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const promptsRoot = path.join(root, "prompts");
const output = path.join(root, "docs", "prompt-index.md");
const modelDetailCatalogPath = path.join(root, "catalog", "model-detail-assets.json");
const modelDetailCatalog = fs.existsSync(modelDetailCatalogPath)
  ? JSON.parse(fs.readFileSync(modelDetailCatalogPath, "utf8"))
  : { entries: [] };

const industryLabels = {
  "automotive-mobility": "Automotive & Mobility",
  "creator-social": "Creator & Social",
  "ecommerce-retail": "E-commerce & Retail",
  "education-training": "Education & Training",
  gaming: "Gaming",
  "marketing-advertising": "Marketing & Advertising",
  "media-entertainment": "Media & Entertainment",
  "travel-hospitality": "Travel & Hospitality",
};

function markdownFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(file);
    if (entry.isFile() && entry.name.endsWith(".md") && !entry.name.startsWith("_")) return [file];
    return [];
  });
}

function readEntry(file) {
  const text = fs.readFileSync(file, "utf8");
  const end = text.indexOf("\n---", 4);
  const frontmatter = text.slice(4, end).split("\n");
  const values = {};
  let section = "";
  for (const line of frontmatter) {
    const scalar = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (scalar) {
      section = scalar[1];
      values[scalar[1]] = scalar[2].replace(/^['\"]|['\"]$/g, "");
    }
    const title = line.match(/^\s{2}en:\s*(.*)$/);
    if (title && section === "title") values.title = title[1].replace(/^['\"]|['\"]$/g, "");
  }
  return { ...values, file: path.relative(root, file).replaceAll(path.sep, "/") };
}

const entries = markdownFiles(promptsRoot).map(readEntry).filter((entry) => entry.status === "published");
entries.sort((a, b) =>
  (a.industry ?? "").localeCompare(b.industry ?? "") ||
  (a.category ?? "").localeCompare(b.category ?? "") ||
  (a.title ?? a.slug).localeCompare(b.title ?? b.slug),
);

const lines = [
  "# Prompt index",
  "",
  `Published entries: **${entries.length + modelDetailCatalog.entries.length}**`,
  `Model-detail assets: **${modelDetailCatalog.entries.length}** (see [catalog/model-detail-assets.json](../catalog/model-detail-assets.json))`,
  "",
];

if (!entries.length) {
  lines.push("No published prompts yet. Add an entry under `prompts/` and mark it `status: published` after review.");
} else {
  let industry = "";
  let category = "";
  for (const entry of entries) {
    if (entry.industry !== industry) {
      industry = entry.industry;
      category = "";
      if (lines.at(-1) !== "") lines.push("");
      lines.push(`## ${industryLabels[industry] ?? industry}`);
      lines.push("");
    }
    if (entry.category !== category) {
      category = entry.category;
      if (lines.at(-1) !== "") lines.push("");
      lines.push(`### ${category}`);
      lines.push("");
    }
    lines.push(`- [${entry.title ?? entry.slug}](../${entry.file}) — \`${entry.model}\``);
  }
}

if (modelDetailCatalog.entries.length) {
  lines.push("", "## Model-detail assets", "", "These entries mirror the reviewed media and prompts shown on Flatkey model-detail pages. The external CDN remains the canonical media store.", "");
  for (const entry of modelDetailCatalog.entries) {
    lines.push(`- [${entry.title?.en ?? entry.slug}](../catalog/model-detail-assets.json) — \`${entry.model}\``);
  }
}

lines.push("");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${lines.join("\n")}\n`);
console.log(`✓ wrote ${path.relative(root, output)} with ${entries.length} published entr${entries.length === 1 ? "y" : "ies"}`);
