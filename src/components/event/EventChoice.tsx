import type {GameEvent} from '../../types/game';
export function EventChoice({choice,onChoose}:{choice:GameEvent['choices'][number];onChoose:(id:string)=>void}){return <button className="event-choice" onClick={()=>onChoose(choice.id)}><span>{choice.label}</span><small>后果需亲自承受</small></button>;}
