import Dexie,{type Table} from 'dexie';
import {z} from 'zod';
import type {SaveGame} from '../types/game';

export type SaveRecord={slot:string;updatedAt:number;save:SaveGame};
export type AssetRecord={id:string;kind:string;name:string;blob:Blob;meta:{size:number;mime:string;fit?:string;scale?:number;x?:number;y?:number}};
export type FontRecord={id:string;name:string;blob:Blob;target:'title'|'body'};

class GameDB extends Dexie{
  saves!:Table<SaveRecord,string>;
  assets!:Table<AssetRecord,string>;
  fonts!:Table<FontRecord,string>;
  settings!:Table<{key:string;value:unknown},string>;
  contentPacks!:Table<{id:string;data:unknown},string>;
  backups!:Table<SaveRecord,string>;
  constructor(){
    super('fusheng_wendao');
    this.version(1).stores({saves:'slot,updatedAt',assets:'id,kind',fonts:'id,target',settings:'key',contentPacks:'id',backups:'slot,updatedAt'});
  }
}
export const db=new GameDB();

export const saveSchema=z.object({
  schemaVersion:z.number(),worldSeed:z.string(),
  player:z.object({name:z.string()}).passthrough(),
  time:z.object({year:z.number(),month:z.number(),day:z.number(),slot:z.number(),weather:z.string()}).passthrough(),
  currentLocationId:z.string(),visited:z.array(z.string()),inventory:z.record(z.number()),flags:z.record(z.boolean()),eventHistory:z.record(z.number()),log:z.array(z.string()),
  settings:z.object({difficulty:z.string(),tone:z.string(),deathRule:z.string(),romanceRule:z.string(),theme:z.enum(['light','dark'])}),gameMinutes:z.number()
}).passthrough();

const defaultSaveFields:Pick<SaveGame,'schemaVersion'|'visited'|'inventory'|'flags'|'eventHistory'|'log'|'gameMinutes'>={schemaVersion:1,visited:[],inventory:{},flags:{},eventHistory:{},log:[],gameMinutes:0};
export function migrateSave(raw:unknown):SaveGame{
  const obj={...(raw as Partial<SaveGame>)};
  for(const [key,value] of Object.entries(defaultSaveFields) as [keyof typeof defaultSaveFields,unknown][]){
    if(obj[key]===undefined)(obj as Record<string,unknown>)[key]=value;
  }
  return saveSchema.parse(obj) as SaveGame;
}
export async function putSave(slot:string,save:SaveGame){await db.saves.put({slot,updatedAt:Date.now(),save});await db.backups.put({slot:`${slot}-${Date.now()}`,updatedAt:Date.now(),save});}
export async function getSave(slot:string){const record=await db.saves.get(slot);return record?migrateSave(record.save):undefined;}
export async function putAsset(kind:string,file:File,meta:Partial<AssetRecord['meta']>={}){const id=`asset-${kind}-${Date.now()}-${Math.random().toString(36).slice(2)}`;await db.assets.put({id,kind,name:file.name,blob:file,meta:{size:file.size,mime:file.type,...meta}});return id;}
export async function putFont(file:File,target:'title'|'body'){const id=`font-${target}-${Date.now()}`;await db.fonts.put({id,name:file.name,blob:file,target});return id;}
