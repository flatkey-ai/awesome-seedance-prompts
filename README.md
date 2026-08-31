# Awesome Seedance Prompts

Curated Seedance video prompts, shot patterns, and production-ready examples for Flatkey.

![Seedance prompt library](https://flatkey.ai/assets/cli/product-reveal.png)

[![Prompts](https://img.shields.io/badge/Prompts-6%20curated%20cases-111111)](docs/prompt-index.md)
[![Model](https://img.shields.io/badge/Model-Seedance%202.5-6f42c1)](https://flatkey.ai/models/seedance-2.5)
[![CLI](https://img.shields.io/badge/Run%20with-Flatkey%20CLI-0f766e)](https://github.com/flatkey-ai/flatkey-cli)
[![中文](https://img.shields.io/badge/中文-查看-ef476f)](README.zh-CN.md)

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

Prompts are organized as small Markdown files so they can be reviewed in pull requests and rendered into GitHub-friendly indexes.

## Menu

- [Cinematic](#cinematic)
- [Commercial / Product](#commercial--product)
- [POV / FPV](#pov--fpv)
- [Reference-Driven](#reference-driven)
- [Storyboard / Structured](#storyboard--structured)
- [How to use a prompt](#how-to-use-a-prompt)
- [Contributing](#contributing)

## Featured cases

The first release starts with workflow-oriented cases from Flatkey's Seedance model guide. Open any case for the full metadata and prompt text.

### Cinematic

#### Film previsualization camera blocking

[![Film previsualization camera blocking](https://flatkey.ai/assets/cli/product-reveal.png)](prompts/cinematic/film-previz-camera-blocking.md)

Create a 12-second film previsualization of a detective entering an empty observatory at dawn. Start with a wide establishing view, track behind the character, then pan to the telescope and hold on the doorway. Keep screen direction, blocking, and the warm-to-cool light transition consistent; no dialogue text or logos.

**Model:** `seedance-2.5` · **Tags:** `cinematic`, `camera-movement`, `previz`

### Commercial / Product

#### E-commerce UGC product video

[![E-commerce UGC product video](https://flatkey.ai/assets/cli/localized-variants.png)](prompts/commercial/ecommerce-ugc-product-video.md)

Create a 9:16 e-commerce UGC video for a reusable travel bottle. Show an adult creator opening the package, filling the bottle, and placing it in a tote bag. Keep the bottle shape and lid color consistent, use a small apartment kitchen, leave space for Portuguese captions added in post, and do not invent logos or readable label text.

**Model:** `seedance-2.5` · **Tags:** `commercial`, `ugc`, `product`

#### Market-research creative variants

[![Market-research creative variants](https://flatkey.ai/assets/cli/thumbnail-test-set.png)](prompts/commercial/market-research-creative-variant.md)

Create three short, clearly distinct creative variants for a market-research test of a sunscreen product: beach morning, city commute, and family picnic. Keep the same bottle proportions and cap, change only setting and opening action, use neutral props, and leave all claims and captions for post-production. Do not add medical promises or invented labels.

**Model:** `seedance-2.5` · **Tags:** `commercial`, `creative-testing`, `product-consistency`

### POV / FPV

#### Creator social explainer video

[![Creator social explainer video](https://flatkey.ai/assets/cli/storyboard-motion.png)](prompts/pov-fpv/creator-social-explainer-video.md)

Create a 4:5 creator explainer about a compact microphone for an independent video maker. Begin with a talking-head medium shot, cut to a close-up of the cable connection, then return to the same framing for a practical tip. Keep the speaker, microphone, and room layout consistent; leave clean caption space and avoid readable brand text.

**Model:** `seedance-2.5` · **Tags:** `creator`, `social-video`, `product`

### Reference-Driven

#### Game cinematic reference shot

[![Game cinematic reference shot](https://flatkey.ai/assets/cli/campaign-hero.png)](prompts/reference-driven/game-cinematic-reference-shot.md)

Animate a game-cinematic reference board into an 8-second shot: a masked pilot walks across a hangar while a grounded shuttle powers up behind them. Preserve the pilot silhouette, helmet markings, shuttle geometry, and camera-left-to-right movement; use practical hangar lights and restrained smoke, with no new text or logos.

**Model:** `seedance-2.5` · **Tags:** `reference-driven`, `game-cinematic`, `continuity`

### Storyboard / Structured

#### Micro-drama storyboard

[![Micro-drama storyboard](https://flatkey.ai/assets/cli/ugc-ad-clips.png)](prompts/storyboard/micro-drama-storyboard.md)

Create a 9:16 micro-drama storyboard from a three-beat comic script: a courier notices a torn envelope, follows a red umbrella through a crowded station, and stops at a silent platform. Keep the same two characters, wardrobe, props, and rainy evening light across the beats; use clear eyelines and no readable text.

**Model:** `seedance-2.5` · **Tags:** `micro-drama`, `storyboard`, `character-consistency`

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

The repository is the public, reviewable content source. Entries can be linked from Flatkey's Prompt Library, reviewed in the internal `/prompt-gallery` console, and shown on:

- model detail pages, such as `/models/seedance-2.5#prompt-library`
- the public Prompt Library at `/prompts`
- individual prompt detail pages at `/prompts/{slug}`

The repository does not contain API keys or private generation results. Media should use stable, authorized URLs and each entry must preserve its source and license information.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`docs/prompt-format.md`](docs/prompt-format.md) before opening a pull request.

## How to use a prompt

1. Choose a case that matches your shot or workflow.
2. Copy the full prompt from the case file.
3. Add your own subject, references, timing, and output settings.
4. Run it with the [Flatkey CLI](https://github.com/flatkey-ai/flatkey-cli) or your compatible Seedance workflow.
