# Awesome Seedance Prompts

按行业整理的 Seedance 视频提示词、镜头模式，以及 Flatkey 当前项目中的公开视频素材。

[English](README.md) · **简体中文**

[![提示词](https://img.shields.io/badge/提示词-20%20条-111111)](docs/prompt-index.md)
[![视频素材](https://img.shields.io/badge/视频素材-10%20条内置%20%2B%201%20条CDN-6f42c1)](docs/video-assets.md)

## 行业目录

仓库优先按视频的业务使用场景划分；技术类型（电影感、商业、POV/FPV、参考图驱动、分镜等）保留在每条记录的 `category` 字段中。

- [电商与零售](docs/prompt-index.md#e-commerce--retail)
- [营销与广告](docs/prompt-index.md#marketing--advertising)
- [创作者与社交](docs/prompt-index.md#creator--social)
- [媒体与娱乐](docs/prompt-index.md#media--entertainment)
- [游戏](docs/prompt-index.md#gaming)
- [汽车与出行](docs/prompt-index.md#automotive--mobility)
- [旅游与酒店](docs/prompt-index.md#travel--hospitality)
- [完整视频素材清单](docs/video-assets.md)

## 已收录案例

### 电商与零售

- [电商 UGC 产品视频](prompts/commercial/ecommerce-ugc-product-video.md)
- [图生视频产品场景](prompts/commercial/image-to-video-product-scene.md)
- [MiniMax H3 产品动态](prompts/commercial/minimax-h3-product-motion.md)

### 营销与广告

- [9:16 UGC 产品广告短片](prompts/commercial/ugc-paid-social-product-clip.md)
- [产品发布本地化视频变体](prompts/commercial/localized-market-product-variant-video.md)
- [电影感产品揭幕视频](prompts/commercial/cinematic-product-reveal-video.md)
- [市场研究创意变体](prompts/commercial/market-research-creative-variant.md)
- [文生视频电影感产品测试](prompts/cinematic/text-to-video-cinematic-test.md)

### 创作者与社交

- [创作者社交平台讲解视频](prompts/pov-fpv/creator-social-explainer-video.md)
- [MiniMax H3 UGC 广告短片](prompts/pov-fpv/minimax-h3-ugc-ad.md)

### 媒体与娱乐

- [微短剧分镜](prompts/storyboard/micro-drama-storyboard.md)
- [电影预演镜头调度](prompts/cinematic/film-previz-camera-blocking.md)
- [角色参考动作短片](prompts/character-consistency/character-reference-motion-clip.md)
- [MiniMax H3 分镜建立镜头](prompts/storyboard/minimax-h3-storyboard-shot.md)
- [雨水坑中的纸船](prompts/cinematic/minimax-paper-boat-rain-puddle.md)

### 游戏

- [游戏电影感参考镜头](prompts/reference-driven/game-cinematic-reference-shot.md)

### 汽车与出行

- [湿地森林赛道上的方程式赛车](prompts/action/seedance-f1-wet-track.md)
- [方程式赛车高速动作](prompts/action/formula-car-wet-forest-circuit.md)
- [湿地赛道上的电影感跑车](prompts/action/seedance-2-5-sports-car-track.md)

### 旅游与酒店

- [东京霓虹街道航拍掠过](prompts/cinematic/seedance-2-0-tokyo-drone.md)

## 如何使用

1. 从[提示词索引](docs/prompt-index.md)按行业选择案例。
2. 打开对应 Markdown 文件，复制完整 Prompt。
3. 替换主体、参考素材、时长和输出设置。
4. 使用 [Flatkey CLI](https://github.com/flatkey-ai/flatkey-cli) 或兼容的 Seedance 工作流运行。

仓库只保存提示词、来源和公开素材链接，不把大体积 MP4 或私有 staging 任务结果提交进 Git。没有找到原始 Prompt 的模型目录视频，会登记在[视频素材清单](docs/video-assets.md)中，但不会根据海报或文件名臆造 Prompt。

## 贡献

请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 和 [Prompt 格式规范](docs/prompt-format.md)。每条第三方内容都必须保留作者、原始链接和许可证信息。
