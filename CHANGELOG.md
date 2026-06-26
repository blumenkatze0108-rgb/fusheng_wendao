# CHANGELOG
## 0.1.0 - 2026-06-26
- 从空仓库创建《浮生问道》阶段 0 与阶段 1 MVP。
- 实现 PWA、IndexedDB、HashRouter、横竖屏布局、场景热点、行动/事件/地图/存档/素材/字体导入。
- 记录当前环境 npm registry 403 导致依赖安装、测试与构建未能完成。

## 0.1.1 - 2026-06-26
- 固定前端依赖版本，移除 latest。
- 修复构建相关 TypeScript 类型问题：React 事件类型、Vite 环境声明、事件选项空值保护、存档迁移与 Zod schema 类型。
- 记录当前 Codex 环境 npm registry 403 对本地验证的影响。

## 0.1.2 - 2026-06-26
- 针对 EdgeOne 的 TS2882 CSS side-effect import 报错，保留 `src/vite-env.d.ts` 并补充 `src/global.d.ts` 声明 `*.css` 模块。

## 0.2.0 - 2026-06-26
- 第一阶段 UI 与交互重制：拆分 App 路由、GameShell、启动页、主菜单、分步新游戏、世界生成页、居所场景、行动抽屉、行动结果、事件场景、SVG 地图、行囊、旧录和设置。
- 新增 AssetRepository/useAssetUrl 与 FontFace 本地字体加载，用户素材和字体刷新后可从 IndexedDB 读取并显示/应用。
- 重写样式系统为冷灰、雾青、深墨、松绿视觉方向，并补充横竖屏差异布局。
