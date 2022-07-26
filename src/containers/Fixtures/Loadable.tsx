import { lazyLoad } from "../../utils/loadable";
import Loading from "../Loading";

//using react lazy to load page lazy
export const Fixtures = lazyLoad(
  () => import("./index"),
  (module) => module.Fixtures,
  { fallback: <Loading /> }
);
