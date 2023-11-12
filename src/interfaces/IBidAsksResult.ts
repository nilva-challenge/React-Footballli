import IEntity from "./IEntity.ts";
import IMeta from "./IMeta.ts";

export interface IBidAskOrder {
  order_rank: number;
  ask_count?: number;
  ask_volume?: number;
  ask_price?: number;
  bid_count: number;
  bid_volume: number;
  bid_price: number;
}

export interface IBidAskValue {
  start_date_time: string;
  end_date_time: string;
  instrument: IEntity;
  orders: IBidAskOrder[];
}

interface IBidAsk {
  entity: IEntity;
  type: string;
  value: IBidAskValue;
  id: string;
  meta: IMeta;
}

export default interface IBidAsksResult {
  data: IBidAsk[];
}
