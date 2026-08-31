# Awesome Seedance Prompts

An industry-organized library of Seedance video prompts, shot patterns, and current Flatkey showcase assets.

![Seedance prompt library](https://flatkey.ai/assets/cli/product-reveal.png)

[![Prompts](https://img.shields.io/badge/Prompts-20%20curated%20cases-111111)](docs/prompt-index.md)
[![Video assets](https://img.shields.io/badge/Video%20assets-10%20bundled%20%2B%201%20CDN-6f42c1)](docs/video-assets.md)
[![Model](https://img.shields.io/badge/Model-Seedance%202.5-6f42c1)](https://flatkey.ai/models/seedance-2.5)
[![CLI](https://img.shields.io/badge/Run%20with-Flatkey%20CLI-0f766e)](https://github.com/flatkey-ai/flatkey-cli)
[![中文](https://img.shields.io/badge/中文-查看-ef476f)](README.zh-CN.md)

> This repository is content-first: every entry is reviewable Markdown with a prompt, industry, production category, source, and artifact link when a public result exists. It is not a runtime API or a dump of private staging outputs.

## Industry index

The primary navigation is by the business context in which a clip will be used. Technical patterns remain in each entry's `category` field and in the generated index.

- [E-commerce & Retail](docs/prompt-index.md#e-commerce--retail)
- [Marketing & Advertising](docs/prompt-index.md#marketing--advertising)
- [Creator & Social](docs/prompt-index.md#creator--social)
- [Media & Entertainment](docs/prompt-index.md#media--entertainment)
- [Gaming](docs/prompt-index.md#gaming)
- [Automotive & Mobility](docs/prompt-index.md#automotive--mobility)
- [Travel & Hospitality](docs/prompt-index.md#travel--hospitality)
- [Complete video asset inventory](docs/video-assets.md)

## What belongs here

This repository focuses on prompts useful for real production workflows:

- product listings, retail launches, and merchandising videos
- paid ads, campaign variants, and market tests
- UGC, creator explainers, and social-first clips
- film, television, micro-drama, and previsualization
- game cinematics and reference-led virtual scenes
- automotive, motorsport, and mobility motion tests

Each entry keeps the business `industry` separate from the shot `category` (cinematic, commercial, POV/FPV, reference-driven, storyboard, and so on). That makes the same prompt useful to both a creative team and a model-detail page.

## Featured cases

The current set is imported from the project's model-detail prompt guides, CLI prompt library, homepage video demo, and committed website media. Open a case for the full metadata and prompt text.

### E-commerce & Retail

- [E-commerce UGC product video](prompts/commercial/ecommerce-ugc-product-video.md)
- [Image-to-video product scene](prompts/commercial/image-to-video-product-scene.md)
- [MiniMax H3 product motion](prompts/commercial/minimax-h3-product-motion.md)

### Marketing & Advertising

- [9:16 UGC product ad clip](prompts/commercial/ugc-paid-social-product-clip.md)
- [Localized product launch variant](prompts/commercial/localized-market-product-variant-video.md)
- [Cinematic product reveal](prompts/commercial/cinematic-product-reveal-video.md)
- [Market-research creative variants](prompts/commercial/market-research-creative-variant.md)
- [Text-to-video cinematic product test](prompts/cinematic/text-to-video-cinematic-test.md)

### Creator & Social

- [Creator social explainer video](prompts/pov-fpv/creator-social-explainer-video.md)
- [MiniMax H3 UGC ad clip](prompts/pov-fpv/minimax-h3-ugc-ad.md)

### Media & Entertainment

- [Micro-drama storyboard](prompts/storyboard/micro-drama-storyboard.md)
- [Film previsualization camera blocking](prompts/cinematic/film-previz-camera-blocking.md)
- [Character reference motion clip](prompts/character-consistency/character-reference-motion-clip.md)
- [MiniMax H3 storyboard establishing shot](prompts/storyboard/minimax-h3-storyboard-shot.md)
- [Paper boat in a rain puddle](prompts/cinematic/minimax-paper-boat-rain-puddle.md)

### Gaming

- [Game cinematic reference shot](prompts/reference-driven/game-cinematic-reference-shot.md)

### Automotive & Mobility

- [Formula car on a wet forest track](prompts/action/seedance-f1-wet-track.md)
- [Formula car high-speed action](prompts/action/formula-car-wet-forest-circuit.md)
- [Cinematic sports car on a wet track](prompts/action/seedance-2-5-sports-car-track.md)

### Travel & Hospitality

- [Neon Tokyo drone pass](prompts/cinematic/seedance-2-0-tokyo-drone.md)

## Quick start

Browse the [generated prompt index](docs/prompt-index.md), or open a prompt file under [`prompts/`](prompts/). To use a prompt with Flatkey CLI:

```bash
npx @flatkey-ai/cli video generate \
  --prompt "paste-a-prompt-here" \
  --model seedance2 \
  -o output.mp4
```

See [`flatkey-cli`](https://github.com/flatkey-ai/flatkey-cli) for installation and model-specific command options.

## Repository layout

```text
prompts/                 Prompt entries; industry is in frontmatter, folders keep shot categories readable
docs/prompt-format.md    Authoring, industry, and attribution rules
docs/prompt-index.md     Generated industry → category index
docs/video-assets.md     Inventory of every committed or stable CDN video asset
schema/                  Machine-readable validation schema
scripts/                 Validation and index-generation scripts
```

## Source and asset policy

- The imported prompts are based on current first-party project copy in the Flatkey website and model guides.
- Public showcase media is linked from the Flatkey website or its CDN; large MP4 files are not copied into Git.
- A video with no recoverable source prompt is still recorded in [`docs/video-assets.md`](docs/video-assets.md), but no prompt is invented from a poster or filename.
- Private, signed, expiring, or test-only task results are excluded.

## Local checks

This repository intentionally has no runtime dependencies for its content checks:

```bash
npm run validate
npm run build:readme
```

The same commands run in GitHub Actions. A pull request must pass validation before it can be merged.

## Relationship to Flatkey

This repository is the public, reviewable content source. Entries can be linked from Flatkey's Prompt Library, the internal `/prompt-gallery` console, model detail pages such as `/models/seedance-2.5#prompt-library`, and individual prompt detail pages. The repository does not contain API keys or private generation results.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`docs/prompt-format.md`](docs/prompt-format.md) before opening a pull request.
