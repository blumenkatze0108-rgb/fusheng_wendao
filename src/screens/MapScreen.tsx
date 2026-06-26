import {useState} from 'react';
import {useGameStore} from '../store/gameStore';
import type {Location} from '../types/game';
import {WorldMap} from '../components/map/WorldMap';
import {LocationDetail} from '../components/map/LocationDetail';
export function MapScreen(){const save=useGameStore(s=>s.save);const doAction=useGameStore(s=>s.doAction);const [selected,setSelected]=useState<Location>();if(!save)return <main/>;return <main className="map-screen"><WorldMap save={save} onSelect={setSelected}/><LocationDetail location={selected} onClose={()=>setSelected(undefined)} onTravel={l=>{const id=l.id==='home'?'travel-home':`travel-${l.id}`;void doAction(id);setSelected(undefined);}}/></main>;}
