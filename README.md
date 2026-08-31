# Awesome Seedance Prompts

Curated Seedance video prompts, shot patterns, and production-ready examples for Flatkey.

> Repository status: the initial content and contributor workflow are being prepared. Every published case will include a reusable prompt, a produced artifact when available, and source attribution.

## What belongs here

This repository focuses on prompts that are useful for real Seedance workflows:

- action and fantasy sequences
- cinematic realism
- POV / FPV camera work
- commercial and product videos
- reference-driven generation
- surreal VFX and transformations
- character consistency
- storyboard and structured prompt templates

Prompts are organized as small Markdown files so they can be reviewed in pull requests, rendered into this README, and synchronized with Flatkey's Prompt Library API.

## Quick start

Browse the [prompt index](docs/prompt-index.md), or open a prompt file under [`prompts/`](prompts/).

To use a prompt with Flatkey CLI:

```bash
npx @flatkey-ai/cli video generate \
  --prompt "paste-a-prompt-here" \
  --model seedance2 \
  -o output.mp4
```

See [`flatkey-cli`](https://github.com/flatkey-ai/flatkey-cli) for installation and model-specific command options.

## Repository layout

```text
prompts/                 Prompt entries grouped by use case
docs/prompt-format.md    Authoring and attribution rules
docs/prompt-index.md     Generated index of published entries
schema/                  Machine-readable validation schema
scripts/                 Validation and index-generation scripts
```

## Local checks

This repository intentionally has no runtime dependencies for its content checks:

```bash
npm run validate
npm run build:readme
```

The same commands run in GitHub Actions. A pull request must pass validation before it can be merged.

## Relationship to Flatkey

The repository is the public, reviewable content source. Approved entries can be imported into Flatkey's Prompt Library, reviewed in the internal `/prompt-gallery` console, and then shown on:

- model detail pages, such as `/models/seedance-2.5#prompt-library`
- the public Prompt Library at `/prompts`
- individual prompt detail pages at `/prompts/{slug}`

The repository does not contain API keys or private generation results. Media should use stable, authorized URLs and each entry must preserve its source and license information.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`docs/prompt-format.md`](docs/prompt-format.md) before opening a pull request.
