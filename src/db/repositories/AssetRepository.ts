import {db} from '../database';

export const AssetRepository={
  async getBlob(assetId?:string){
    if(!assetId)return undefined;
    try{return (await db.assets.get(assetId))?.blob;}catch{return undefined;}
  },
  async deleteAsset(assetId?:string){
    if(assetId)await db.assets.delete(assetId);
  }
};
