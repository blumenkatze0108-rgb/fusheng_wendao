import {useEffect,useState} from 'react';
import {AssetRepository} from '../db/repositories/AssetRepository';

export function useAssetUrl(assetId:string|undefined,fallback:string){
  const [url,setUrl]=useState(fallback);
  useEffect(()=>{
    let objectUrl:string|undefined;
    let alive=true;
    setUrl(fallback);
    void AssetRepository.getBlob(assetId).then(blob=>{
      if(!alive||!blob)return;
      objectUrl=URL.createObjectURL(blob);
      setUrl(objectUrl);
    }).catch(()=>setUrl(fallback));
    return()=>{alive=false;if(objectUrl)URL.revokeObjectURL(objectUrl);};
  },[assetId,fallback]);
  return url;
}
