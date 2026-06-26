import {useState} from 'react';
import type {Hotspot} from '../types/game';
import {useGameStore} from '../store/gameStore';
import {SceneView} from '../components/scene/SceneView';
import {ActionDrawer} from '../components/action/ActionDrawer';
import {ActionResult} from '../components/action/ActionResult';
import {EventScene} from '../components/event/EventScene';
export function HomeSceneScreen(){const {save,pendingEvent,lastActionResult,doAction,choose,clearActionResult}=useGameStore();const [hotspot,setHotspot]=useState<Hotspot>();const [tip,setTip]=useState<string>();if(!save)return <main className="empty-game"><p>旧卷未启，请先新入世。</p></main>;if(lastActionResult)return <ActionResult result={lastActionResult} onContinue={clearActionResult}/>;if(pendingEvent)return <EventScene event={pendingEvent} save={save} onChoose={choose}/>;return <main className="home-screen"><SceneView save={save} onHotspot={setHotspot} onDescribe={h=>setTip(h.description)}/><aside className="interaction-pane"><h2>此刻可为</h2><p>点选场景中的墨色标记，先查看行动，再决定是否落子。</p>{tip&&<blockquote>{tip}</blockquote>}<ul>{save.log.slice(0,5).map((l,i)=><li key={i}>{l}</li>)}</ul></aside><ActionDrawer hotspot={hotspot} onClose={()=>setHotspot(undefined)} onPerform={(id,pool)=>{setHotspot(undefined);void doAction(id,pool);}}/></main>;}
