import { CompetitionsDataType } from "./server.ts";

export interface NormalizeDataType {
  date: string;
  data: CompetitionsDataType[];
}
