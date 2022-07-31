import { useParams, useLocation } from "react-router-dom";

export default function Params() {
  let links = {
    Competitions: "/Competitions",
    Profile: "/Profile",
    Discovery: "/Discovery",
    Football: "/Football",
    Leagues: "/Leagues",
  };

  let params = useParams();
  let location = useLocation();

  // merge params
  let { search } = location;
  if (search) {
    let output: any = {};
    // remove ?
    let queries = search.slice(1);
    let queryArray = queries.split("&");

    for (let query of queryArray) {
      let [key, value] = query.split("=");
      output[key] = value;
    }

    params = {
      ...params,
      ...output,
    };
  }

  let name;
  Object.keys(links).forEach((key) => {
    let pathname = links[key];
    if (pathname === location.pathname) {
      name = key;
    }
  });

  return { params, name, key: location.key };
}
