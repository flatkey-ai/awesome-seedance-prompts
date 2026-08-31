# Video asset inventory

This inventory mirrors the video files and stable video URLs currently referenced by the Flatkey website. The repository stores prompt metadata and links; it does not copy large MP4 files into Git.

## Paired assets

These files have at least one prompt entry in [`prompts/`](../prompts/).

| Industry | Project asset | Model(s) shown in project | Public video | Poster | Prompt entries |
| --- | --- | --- | --- | --- | --- |
| Automotive & Mobility | Homepage F1 wet-track demo | `seedance-2.5` | [MP4](https://cdn.shulex-voc.com/flatkey/model-examples/seedance-f1-wet-track.mp4) | [PNG](https://cdn.shulex-voc.com/flatkey/model-examples/seedance-f1-wet-track.png) | [F1 wet track](../prompts/action/seedance-f1-wet-track.md) |
| Automotive & Mobility | Homepage video model-wall result | `seedance-2.5` | [MP4](https://flatkey.ai/assets/home-tabs/video-f1-result.mp4) | [PNG](https://flatkey.ai/assets/home-tabs/video-f1-result.png) | [F1 wet track](../prompts/action/seedance-f1-wet-track.md) |
| E-commerce & Retail | CLI localized variants | `seedance-2.0`, `MiniMax-H3` | [MP4](https://flatkey.ai/assets/cli/localized-variants.mp4) | [PNG](https://flatkey.ai/assets/cli/localized-variants.png) | [Localized launch](../prompts/commercial/localized-market-product-variant-video.md), [MiniMax storyboard](../prompts/storyboard/minimax-h3-storyboard-shot.md) |
| E-commerce & Retail | CLI product reveal | `seedance-2.0`, `MiniMax-H3` | [MP4](https://flatkey.ai/assets/cli/product-reveal.mp4) | [PNG](https://flatkey.ai/assets/cli/product-reveal.png) | [Cinematic reveal](../prompts/commercial/cinematic-product-reveal-video.md), [MiniMax product motion](../prompts/commercial/minimax-h3-product-motion.md) |
| Creator & Social | CLI UGC ad clips | `seedance-2.0`, `MiniMax-H3` | [MP4](https://flatkey.ai/assets/cli/ugc-ad-clips.mp4) | [PNG](https://flatkey.ai/assets/cli/ugc-ad-clips.png) | [Paid-social UGC](../prompts/commercial/ugc-paid-social-product-clip.md), [MiniMax UGC](../prompts/pov-fpv/minimax-h3-ugc-ad.md) |
| E-commerce & Retail | Image-to-video product scene | `seedance-2.5` | [MP4](https://flatkey.ai/assets/video/v1.1.mp4) | [JPG](https://flatkey.ai/assets/video/v1.1.jpg) | [Product scene](../prompts/commercial/image-to-video-product-scene.md) |
| Media & Entertainment | Character reference motion | `seedance-2.5` | [MP4](https://flatkey.ai/assets/video/v1.2.mp4) | [JPG](https://flatkey.ai/assets/video/v1.2.jpg) | [Character motion](../prompts/character-consistency/character-reference-motion-clip.md) |
| Marketing & Advertising | Text-to-video cinematic test | `veo-3.1-fast-generate-preview` | [MP4](https://flatkey.ai/assets/video/v1.3.mp4) | [JPG](https://flatkey.ai/assets/video/v1.3.jpg) | [Cinematic test](../prompts/cinematic/text-to-video-cinematic-test.md) |

## Model-directory preview assets

These three clips are used as model-directory/carousel artwork. The current source project does not publish a scene prompt for them, so they are listed here without an invented prompt. Add a prompt link once the original generation request is recovered.

| Industry | Project asset | Model | Public video | Poster | Prompt status |
| --- | --- | --- | --- | --- | --- |
| Model showcase | Featured model carousel | `seedance-2.5` / ByteDance | [MP4](https://flatkey.ai/assets/models-featured/bytedance.mp4) | [JPG](https://flatkey.ai/assets/models-featured/bytedance.jpg) | No prompt in source project |
| Model showcase | Featured model carousel | `MiniMax-H3` / MiniMax | [MP4](https://flatkey.ai/assets/models-featured/minimax.mp4) | [JPG](https://flatkey.ai/assets/models-featured/minimax.jpg) | No prompt in source project |
| Model showcase | Featured model carousel | OpenAI model artwork | [MP4](https://flatkey.ai/assets/models-featured/openai.mp4) | [JPG](https://flatkey.ai/assets/models-featured/openai.jpg) | No prompt in source project |

## Reconciliation notes

- The committed website contains ten bundled MP4 files and one additional homepage demo served from the Flatkey CDN.
- Several prompt cards intentionally reuse a rendered clip as a visual reference. The prompt text remains separate so each model/workflow can be reviewed independently.
- The three model-directory clips are not treated as prompt examples until their original prompts are available. This keeps the gallery factual and avoids backfilling a prompt from the poster alone.
- Private, signed, or temporary video-result URLs from API tests and staging tasks are excluded; they are not stable public showcase assets.
