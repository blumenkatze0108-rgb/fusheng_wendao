# ARCHITECTURE
数据驱动：`data/*` 定义地点、行动、事件；`engine/*` 负责条件、效果、行动、事件、时间、世界生成；`store/gameStore.ts` 连接 UI 与引擎；`db/database.ts` 使用 IndexedDB 保存存档、素材、字体与设置。
