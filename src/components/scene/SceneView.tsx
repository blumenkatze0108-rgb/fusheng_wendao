import homeDefault from '../../assets/defaults/home-room.svg';
import {locations} from '../../data/locations/locations';
import type {Hotspot,SaveGame} from '../../types/game';
import {AssetImage} from '../asset/AssetImage';
import {PlayerPortrait} from './PlayerPortrait';
import {SceneHotspot} from './SceneHotspot';
import {TimeTrack} from './TimeTrack';

export function SceneView({save,onHotspot,onDescribe}:{save:SaveGame;onHotspot:(h:Hotspot)=>void;onDescribe:(h:Hotspot)=>void}){const loc=locations.find(l=>l.id===save.currentLocationId)??locations[0];return <section className="scene-view"><AssetImage className="scene-background" assetId={save.player.assetIds.background} fallback={homeDefault} alt={loc.name} role="background"/><div className="scene-weather" data-weather={save.time.weather}/><div className="scene-title"><small>当前所在</small><h1>{loc.name}</h1><p>{loc.description}</p></div><PlayerPortrait save={save}/>{loc.hotspots.map(h=><SceneHotspot key={h.id} hotspot={h} onOpen={onHotspot} onDescribe={onDescribe}/>) }<div className="scene-stats"><span>精力 {save.player.stats.energy}</span><span>康健 {save.player.stats.health}</span><span>灵石 {save.player.stats.spiritStones}</span></div><TimeTrack slot={save.time.slot}/></section>;}
