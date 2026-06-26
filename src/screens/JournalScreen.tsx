import {useGameStore} from '../store/gameStore';
export function JournalScreen(){const save=useGameStore(s=>s.save);return <main className="journal-screen"><h1>旧录</h1><ol>{save?.log.map((l,i)=><li key={i}>{l}</li>)}</ol></main>;}
