import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import bg from '../assets/defaults/ink-landscape.svg';
export function SplashScreen(){const nav=useNavigate();useEffect(()=>{const t=window.setTimeout(()=>nav('/menu'),1200);return()=>window.clearTimeout(t);},[nav]);return <main className="splash-screen"><img src={bg} alt="水墨山河"/><div className="splash-shade"/><section><h1>浮生问道</h1><p>此身落于天地之间，往后行止，由你落子。</p><span>正在拂去卷上浮尘……</span></section><small>v0.1.2</small></main>;}
