# SAVE_SCHEMA
当前 schemaVersion=1。普通存档仅保存 JSON 游戏数据；图片与字体 Blob 存入独立 IndexedDB 表，通过 assetId/fontId 引用。旧版本通过迁移补齐缺失字段，禁止清空 IndexedDB。
