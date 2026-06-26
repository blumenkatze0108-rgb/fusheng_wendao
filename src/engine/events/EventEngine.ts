import type {GameEvent,SaveGame} from '../../types/game';
import {ConditionEngine} from '../conditions/ConditionEngine';
import {SeededRandomEngine} from '../rng/SeededRandomEngine';
import {applyEffects} from '../effects/EffectEngine';

export function drawEvent(save:SaveGame,events:GameEvent[],pool:string[]):GameEvent|undefined{
  const candidates=events.filter(e=>pool.includes(e.id)&&ConditionEngine.all(e.conditions,save)&&(e.repeatable||!save.eventHistory[e.id]));
  if(candidates.length===0)return undefined;
  const total=candidates.reduce((a,e)=>a+e.weight,0);
  let roll=new SeededRandomEngine(`${save.worldSeed}:event:${save.currentLocationId}:${save.time.year}-${save.time.month}-${save.time.day}-${save.time.slot}`).next()*total;
  return candidates.find(e=>(roll-=e.weight)<=0)??candidates[0];
}

export function chooseEvent(save:SaveGame,event:GameEvent,choiceId:string){
  const choice=event.choices.find(x=>x.id===choiceId)??event.choices[0];
  if(!choice)throw new Error(`事件 ${event.id} 没有可用选项`);
  const next=applyEffects(save,[...choice.effects,{type:'log',text:`${event.title}：${choice.result}`}]);
  next.eventHistory[event.id]=(next.eventHistory[event.id]??0)+1;
  return {save:next,result:choice.result};
}
