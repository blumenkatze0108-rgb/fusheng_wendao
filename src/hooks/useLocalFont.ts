import {useEffect} from 'react';
import {db} from '../db/database';

const defaults={title:'"Songti SC","STSong","SimSun",serif',body:'"PingFang SC","Microsoft YaHei",system-ui,sans-serif'};

async function loadFont(fontId:string|undefined,target:'title'|'body'){
  const variable=target==='title'?'--font-title':'--font-body';
  if(!fontId){document.documentElement.style.setProperty(variable,defaults[target]);return;}
  try{
    const record=await db.fonts.get(fontId);
    if(!record){document.documentElement.style.setProperty(variable,defaults[target]);return;}
    const family=`Fusheng-${target}-${record.id.replace(/[^a-zA-Z0-9_-]/g,'')}`;
    const fontData=await record.blob.arrayBuffer();
    const face=new FontFace(family,fontData);
    await face.load();
    document.fonts.add(face);
    document.documentElement.style.setProperty(variable,`"${family}", ${defaults[target]}`);
  }catch(error){
    console.warn(`本地字体加载失败，已恢复默认${target==='title'?'标题':'正文'}字体。`,error);
    document.documentElement.style.setProperty(variable,defaults[target]);
  }
}

export function useLocalFont(titleFontId?:string,bodyFontId?:string){
  useEffect(()=>{void loadFont(titleFontId,'title');},[titleFontId]);
  useEffect(()=>{void loadFont(bodyFontId,'body');},[bodyFontId]);
}
