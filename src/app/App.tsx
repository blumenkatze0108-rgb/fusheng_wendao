import {Route,Routes} from 'react-router-dom';
import {GameShell} from '../layouts/GameShell';
import {SplashScreen} from '../screens/SplashScreen';
import {MainMenuScreen} from '../screens/MainMenuScreen';
import {NewGameScreen} from '../screens/NewGameScreen';
import {WorldGeneratingScreen} from '../screens/WorldGeneratingScreen';
import {HomeSceneScreen} from '../screens/HomeSceneScreen';
import {MapScreen} from '../screens/MapScreen';
import {InventoryScreen} from '../screens/InventoryScreen';
import {JournalScreen} from '../screens/JournalScreen';
import {SaveScreen} from '../screens/SaveScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import {AppBootstrap} from './AppBootstrap';

export default function App(){return <AppBootstrap><Routes><Route path="/" element={<SplashScreen/>}/><Route path="/menu" element={<MainMenuScreen/>}/><Route path="/new" element={<NewGameScreen/>}/><Route path="/generating" element={<WorldGeneratingScreen/>}/><Route element={<GameShell/>}><Route path="/game" element={<HomeSceneScreen/>}/><Route path="/map" element={<MapScreen/>}/><Route path="/inventory" element={<InventoryScreen/>}/><Route path="/journal" element={<JournalScreen/>}/><Route path="/save" element={<SaveScreen/>}/><Route path="/settings" element={<SettingsScreen/>}/></Route></Routes></AppBootstrap>;}
