import {useGameStore} from '../store/gameStore';
export function InventoryScreen(){const save=useGameStore(s=>s.save);return <main className="inventory-screen"><h1>行囊</h1><ul>{Object.entries(save?.inventory??{}).map(([id,n])=><li key={id}><b>{id}</b><span>×{n}</span></li>)}</ul></main>;}
