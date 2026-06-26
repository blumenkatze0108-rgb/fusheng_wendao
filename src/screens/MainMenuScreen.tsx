import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import bg from '../assets/defaults/ink-landscape.svg';
import {useGameStore} from '../store/gameStore';
import {locations} from '../data/locations/locations';
export function MainMenuScreen(){const nav=useNavigate();const {save,load}=useGameStore();useEffect(()=>{void load();},[load]);const loc=locations.find(l=>l.id===save?.currentLocationId);return <main className="menu-screen"><img src={bg} alt="主菜单背景"/><div className="menu-shade"/><section className="vertical-menu"><h1>浮生问道</h1><button disabled={!save} onClick={()=>nav('/game')}><span>续前尘</span>{save?<small>{save.player.name} · {loc?.name} · {save.time.year}年{save.time.month}月{save.time.day}日</small>:<small>暂无可续之世</small>}</button><button onClick={()=>nav('/new')}>新入世</button><button onClick={()=>nav('/settings')}>读取存档</button><button onClick={()=>nav('/journal')}>生平旧录</button><button onClick={()=>nav('/settings')}>设置</button></section></main>;}
