import {useEffect,useState} from 'react';
export function useOrientation(){
  const get=()=>window.matchMedia('(orientation: landscape)').matches?'landscape':'portrait';
  const [orientation,setOrientation]=useState<'landscape'|'portrait'>(()=>typeof window==='undefined'?'portrait':get());
  useEffect(()=>{const m=window.matchMedia('(orientation: landscape)');const on=()=>setOrientation(get());m.addEventListener('change',on);return()=>m.removeEventListener('change',on);},[]);
  return orientation;
}
