import type {SaveGame} from '../../types/game';
import {season,slots} from '../../engine/time/TimeEngine';
export function TopWorldBar({save}:{save:SaveGame}){return <header className="world-bar"><span>{save.time.year}年 {save.time.month}月{save.time.day}日 · {season(save.time.month)}</span><strong>{slots[save.time.slot]} · {save.time.weather}</strong></header>;}
