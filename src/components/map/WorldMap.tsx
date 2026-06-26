import mapDefault from '../../assets/defaults/map-scroll.svg';
import {locations} from '../../data/locations/locations';
import type {Location,SaveGame} from '../../types/game';
import {AssetImage} from '../asset/AssetImage';
import {MapLocationNode} from './MapLocationNode';
export function WorldMap({save,onSelect}:{save:SaveGame;onSelect:(l:Location)=>void}){return <section className="world-map"><AssetImage className="map-ground" assetId={save.player.assetIds.background} fallback={mapDefault} alt="天下地图" role="map"/><svg className="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M18 70 C35 58 50 64 63 48 S80 42 92 28"/><path d="M28 42 C40 50 48 54 58 65"/><path d="M12 78 C34 70 53 68 79 55"/></svg>{locations.map(l=><MapLocationNode key={l.id} location={l} current={save.currentLocationId===l.id} onSelect={onSelect}/>)}</section>;}
