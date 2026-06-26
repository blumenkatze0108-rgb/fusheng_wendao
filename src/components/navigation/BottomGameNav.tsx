import {NavLink} from 'react-router-dom';
const items=[['/game','此刻','M12 4v16M4 12h16'],['/map','天下','M4 17l6-12 4 7 6-4-6 12-4-7z'],['/inventory','行囊','M6 8h12l-1 12H7L6 8zm3 0a3 3 0 016 0'],['/journal','旧录','M6 4h12v16H6zM9 8h6M9 12h6'],['/settings','更多','M12 8a4 4 0 100 8 4 4 0 000-8z']] as const;
export function BottomGameNav(){return <nav className="bottom-nav">{items.map(([to,label,path])=><NavLink key={to} to={to}><svg viewBox="0 0 24 24"><path d={path}/></svg><span>{label}</span></NavLink>)}</nav>;}
