import IEntity from "./IEntity.ts";
import IMeta from "./IMeta.ts";

export interface IAssetValue {
  title: string;
  english_title: string;
  short_title: string;
  english_short_title: string;
  trade_symbol: string;
  english_trade_symbol: string;
}

export interface IAsset {
  entity: IEntity;
  type: string;
  value: IAssetValue;
  id: string;
  meta: IMeta;
}

export default interface IAssetsResult {
  data: IAsset[];
}
