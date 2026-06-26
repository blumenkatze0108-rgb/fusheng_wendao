import type {ReactNode} from 'react';
import {useGameStore} from '../store/gameStore';
import {useLocalFont} from '../hooks/useLocalFont';
export function AppBootstrap({children}:{children:ReactNode}){const save=useGameStore(s=>s.save);useLocalFont(save?.player.assetIds.fontTitle,save?.player.assetIds.fontBody);return <>{children}</>;}
