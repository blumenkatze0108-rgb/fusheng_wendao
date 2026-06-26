import {useRef} from 'react';
export function useLongPress(onLongPress:()=>void,onClick:()=>void,ms=520){
  const timer=useRef<number>();
  const start=()=>{timer.current=window.setTimeout(onLongPress,ms);};
  const clear=(click=false)=>{if(timer.current)window.clearTimeout(timer.current);if(click)onClick();};
  return {onPointerDown:start,onPointerUp:()=>clear(true),onPointerLeave:()=>clear(false)};
}
