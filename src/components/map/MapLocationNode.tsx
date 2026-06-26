import type {CSSProperties} from 'react';
import type {Location} from '../../types/game';
export function MapLocationNode({location,current,onSelect}:{location:Location;current:boolean;onSelect:(l:Location)=>void}){return <button className={`map-location ${current?'current':''}`} style={{'--x':`${location.x}%`,'--y':`${location.y}%`} as CSSProperties} onClick={()=>onSelect(location)}><i/>{location.name}</button>;}
