# Prompt format

Each prompt is a Markdown file with YAML frontmatter. The frontmatter keeps the GitHub cases consistent across README rendering, internal review, and links to Flatkey's model and prompt pages.

## Required fields

```yaml
slug: seedance-commercial-product-reveal
model: seedance-2.5
industry: ecommerce-retail
category: commercial
title:
  en: Commercial Product Reveal
source:
  label: "@creator"
  platform: X
  url: https://x.com/creator/status/123
  license: CC BY 4.0
status: draft
```

The Markdown body after the closing `---` is the complete prompt text.

## Artifact metadata

For a produced result, add an artifact block:

```yaml
artifact:
  kind: video
  url: https://storage.googleapis.com/example/video.mp4
  poster: https://storage.googleapis.com/example/video-poster.jpg
  duration: 10
  ratio: "9:16"
  resolution: 1080p
```

The media URL must be stable and authorized for public display. Do not commit large video files to this repository. Use the repository for metadata and prompt text, and store approved media in the project media bucket/CDN.

## Optional fields

```yaml
tags:
  - commercial
  - product
  - camera-movement
summary:
  en: A single-shot product reveal with a controlled push-in.
featured: true
captured_at: 2026-08-31
```

Keep `model` aligned with the public model identifier used by Flatkey. If the upstream provider uses another internal name, do not expose that internal name in the public entry.

`industry` is the primary business audience for the prompt. Use one of the controlled values below; keep `category` for the production pattern or technical shape of the shot.

| Industry | Use for |
| --- | --- |
| `automotive-mobility` | Cars, motorsport, transport, and mobility products |
| `creator-social` | Creator explainers, UGC, influencer, and social-first clips |
| `ecommerce-retail` | Product listings, retail launches, merchandising, and shopping content |
| `education-training` | Courses, demonstrations, tutorials, and training content |
| `gaming` | Game cinematics, trailers, gameplay references, and virtual worlds |
| `marketing-advertising` | Campaign concepts, paid ads, market tests, and brand creatives |
| `media-entertainment` | Film, television, micro-drama, music video, and narrative previsualization |
| `travel-hospitality` | Destinations, hotels, tourism, and location-led experiences |

When a prompt could serve several industries, choose the primary buyer or publishing context and add the other context as a tag.

## Attribution and licensing

Every third-party entry must retain the original creator and source URL. Licensing is evaluated per entry; a public URL alone is not proof that media may be redistributed. Use a repository-owned asset only when the project has the right to publish it.
