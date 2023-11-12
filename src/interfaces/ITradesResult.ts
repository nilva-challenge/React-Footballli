import IEntity from "./IEntity.ts";
import IMeta from "./IMeta.ts";

export interface ITradeValue {
  start_date_time: string;
  end_date_time: string;
  instrument: IEntity;
  close_price: number;
  close_price_change: number;
  close_price_change_percent: number;
  open_price: number;
  low_price: number;
  high_price: number;
  trade_count: number;
  buyer_count: number;
  volume: number;
  value: number;
  real_close_price?: number;
}

interface ITrade {
  entity: IEntity;
  type: string;
  value: ITradeValue;
  id: string;
  meta: IMeta;
}

export default interface ITradesResult {
  data: ITrade[];
}
