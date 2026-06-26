import {Outlet} from 'react-router-dom';
import {useGameStore} from '../store/gameStore';
import {BottomGameNav} from '../components/navigation/BottomGameNav';
import {LandscapeGameNav} from '../components/navigation/LandscapeGameNav';
import {TopWorldBar} from '../components/navigation/TopWorldBar';
import {Toast} from '../components/common/Toast';
import {useLocalFont} from '../hooks/useLocalFont';
export function GameShell(){const {save,notice,clearNotice}=useGameStore();useLocalFont(save?.player.assetIds.fontTitle,save?.player.assetIds.fontBody);return <div className="game-shell" data-theme={save?.settings.theme??'light'}>{save&&<TopWorldBar save={save}/>}<LandscapeGameNav/><Outlet/><BottomGameNav/><Toast message={notice} onClose={clearNotice}/></div>;}
