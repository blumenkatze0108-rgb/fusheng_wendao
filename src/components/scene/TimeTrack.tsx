import {slots} from '../../engine/time/TimeEngine';
export function TimeTrack({slot}:{slot:number}){return <ol className="time-track">{slots.map((s,i)=><li key={s} className={i===slot?'current':''}>{s}</li>)}</ol>;}
