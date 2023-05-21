import { IFixture } from "./IFixture";

export interface ILeague {
  id: number;
  logo: string;
  name: string;
  season: string;
  fixtures: Array<IFixture>;
}
