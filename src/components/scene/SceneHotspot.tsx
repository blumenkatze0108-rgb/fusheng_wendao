import type {CSSProperties} from 'react';
import type {Hotspot} from '../../types/game';
import {useLongPress} from '../../hooks/useLongPress';
export function SceneHotspot({hotspot,onOpen,onDescribe}:{hotspot:Hotspot;onOpen:(h:Hotspot)=>void;onDescribe:(h:Hotspot)=>void}){const press=useLongPress(()=>onDescribe(hotspot),()=>onOpen(hotspot));return <button className="scene-hotspot" style={{'--px':`${hotspot.portraitPosition.x}%`,'--py':`${hotspot.portraitPosition.y}%`,'--lx':`${hotspot.landscapePosition.x}%`,'--ly':`${hotspot.landscapePosition.y}%`} as CSSProperties} {...press}><i/><span>{hotspot.label}</span></button>;}
