import type {GameTime} from '../../types/game';
import {SeededRandomEngine} from '../rng/SeededRandomEngine';
export const slots=['清晨','上午','午后','黄昏','夜间','深夜'];export const weathers=['晴','阴','多云','小雨','暴雨','雪','雾','大风','雷雨','灵雨','异常天象'];
export function advanceTime(t:GameTime,steps:number,seed:string):GameTime{let nt={...t,slot:t.slot+steps};while(nt.slot>=6){nt.slot-=6;nt.day++;if(nt.day>30){nt.day=1;nt.month++;if(nt.month>12){nt.month=1;nt.year++}}const rng=new SeededRandomEngine(`${seed}:${nt.year}-${nt.month}-${nt.day}`);nt.weather=rng.pick(weathers)}return nt}
export const season=(m:number)=>m<=2||m===12?'冬':m<=5?'春':m<=8?'夏':'秋';
