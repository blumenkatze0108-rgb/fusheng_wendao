import {useState} from 'react';
import {useAssetUrl} from '../../hooks/useAssetUrl';

type Props={assetId?:string;fallback:string;alt:string;className?:string;role?:'background'|'portrait'|'avatar'|'map'};
export function AssetImage({assetId,fallback,alt,className,role}:Props){
  const url=useAssetUrl(assetId,fallback);
  const [failed,setFailed]=useState(false);
  return <img className={className} data-asset-role={role} src={failed?fallback:url} alt={alt} onError={()=>setFailed(true)} draggable={false}/>;
}
