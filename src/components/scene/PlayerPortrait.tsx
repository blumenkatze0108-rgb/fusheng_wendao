import defaultPortrait from '../../assets/defaults/person-silhouette.svg';
import {AssetImage} from '../asset/AssetImage';
import type {SaveGame} from '../../types/game';
export function PlayerPortrait({save}:{save:SaveGame}){const id=save.player.assetIds.portrait??save.player.assetIds.full;return <AssetImage className="player-portrait" assetId={id} fallback={defaultPortrait} alt={save.player.name} role="portrait"/>;}
