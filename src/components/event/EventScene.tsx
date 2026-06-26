import {useState} from 'react';
import sceneDefault from '../../assets/defaults/home-room.svg';
import portraitDefault from '../../assets/defaults/person-silhouette.svg';
import type {GameEvent,SaveGame} from '../../types/game';
import {AssetImage} from '../asset/AssetImage';
import {EventChoice} from './EventChoice';
export function EventScene({event,save,onChoose}:{event:GameEvent;save:SaveGame;onChoose:(id:string)=>void}){const paragraphs=[event.description,'风声在屋檐或街角停了停，像有人把一枚因果轻轻放到你手边。'];const [page,setPage]=useState(0);return <main className="event-scene"><AssetImage className="event-bg" assetId={save.player.assetIds.background} fallback={sceneDefault} alt="事件背景"/><section className="event-text"><small>{event.category} · {event.rarity}</small><h1>{event.title}</h1><p>{paragraphs[page]}</p>{page<paragraphs.length-1?<button className="text-button" onClick={()=>setPage(page+1)}>继续读下去</button>:<div className="event-choices">{event.choices.map(c=><EventChoice key={c.id} choice={c} onChoose={onChoose}/>)}</div>}</section><AssetImage className="event-figure" fallback={portraitDefault} alt="参与者剪影"/></main>;}
