import {useGameStore} from '../store/gameStore';
export function SaveScreen(){const {manualSave,load}=useGameStore();return <main className="save-screen"><h1>存档</h1><button onClick={()=>manualSave('manual-1')}>写入手动卷一</button><button onClick={()=>load('manual-1')}>读取手动卷一</button></main>;}
