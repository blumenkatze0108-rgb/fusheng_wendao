import type {ChangeEvent} from 'react';
import {putAsset} from '../../db/database';
import {AssetImage} from './AssetImage';

type Props={label:string;kind:string;assetId?:string;fallback:string;onChange:(id:string|undefined)=>void};
export function AssetUploader({label,kind,assetId,fallback,onChange}:Props){
  async function pick(e:ChangeEvent<HTMLInputElement>){const file=e.target.files?.[0];if(file)onChange(await putAsset(kind,file,{fit:'cover',scale:1,x:50,y:50}));}
  return <section className="asset-uploader"><AssetImage assetId={assetId} fallback={fallback} alt={label}/><div><b>{label}</b><p>本地图片会以 Blob 保存到 IndexedDB，刷新后仍可读取。</p><label className="ink-link">上传 / 替换<input hidden type="file" accept="image/*" onChange={pick}/></label>{assetId&&<button className="text-button" onClick={()=>onChange(undefined)}>恢复默认</button>}</div></section>;
}
