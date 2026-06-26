import {create} from 'zustand';
import type {Effect,GameEvent,SaveGame} from '../types/game';
import {createSave} from '../engine/world/WorldGenerator';
import {actions} from '../data/actions/actions';
import {events} from '../data/events/events';
import {locations} from '../data/locations/locations';
import {performAction} from '../engine/actions/ActionEngine';
import {chooseEvent,drawEvent} from '../engine/events/EventEngine';
import {getSave,putSave} from '../db/database';

type ActionResult={actionId:string;title:string;text:string;before:SaveGame;after:SaveGame;effects:Effect[]};
type State={
  save?:SaveGame;pendingEvent?:GameEvent;lastActionResult?:ActionResult;notice?:string;
  newGame:(x:Parameters<typeof createSave>[0])=>Promise<void>;
  load:(slot?:string)=>Promise<void>;
  manualSave:(slot:string)=>Promise<void>;
  doAction:(id:string,pool?:string[])=>Promise<void>;
  choose:(choiceId:string)=>Promise<void>;
  clearNotice:()=>void;clearActionResult:()=>void;
  setAsset:(k:keyof SaveGame['player']['assetIds'],id: string|undefined)=>void;
  setTheme:(t:'light'|'dark')=>void;
};
export const useGameStore=create<State>((set,get)=>({
  async newGame(x){const save=createSave(x);await putSave('auto',save);set({save,notice:'新生已定，世界种子已写入存档。'});},
  async load(slot='auto'){const save=await getSave(slot);set({save,notice:save?'已读取存档。':'未找到存档，请新建人生。'});},
  async manualSave(slot){const save=get().save;if(save){await putSave(slot,save);set({notice:`已保存到${slot}。`});}},
  async doAction(id,pool){const save=get().save;const action=actions.find(x=>x.id===id);if(!save||!action)return;const settled=performAction(save,action);let next=settled.save;const loc=locations.find(l=>l.id===next.currentLocationId);const event=drawEvent(next,events,pool?.length?pool:(loc?.eventPool??[]));await putSave('auto',next);set({save:next,pendingEvent:event,lastActionResult:{actionId:id,title:action.label,text:settled.text,before:save,after:next,effects:action.effects},notice:'已自动存档'});},
  async choose(choiceId){const save=get().save,event=get().pendingEvent;if(!save||!event)return;const result=chooseEvent(save,event,choiceId).save;await putSave('auto',result);set({save:result,pendingEvent:undefined,notice:'事件已记录。'});},
  clearNotice(){set({notice:undefined});},clearActionResult(){set({lastActionResult:undefined});},
  setAsset(k,id){const save=get().save;if(!save)return;const next=structuredClone(save);if(id)next.player.assetIds[k]=id;else delete next.player.assetIds[k];void putSave('auto',next);set({save:next});},
  setTheme(t){const save=get().save;if(!save)return;const next=structuredClone(save);next.settings.theme=t;void putSave('auto',next);set({save:next});}
}));
