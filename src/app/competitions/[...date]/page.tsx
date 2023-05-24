import League from "@/components/widgets/League";
import { IParams } from "@/shared/types";
import { ILeague } from "@/shared/types.d";
const BASE_URL="https://core-sport-api.zarebin.ir/api/";

const getCompetetions=async(path:string,params:IParams)=>{
  const response=await fetch(`${BASE_URL+path}/?date=${params.date}`,{
      method:"GET",
      cache:"no-store",
  })
const data= response.json();
return data;
}


export default async function Competitions({params}:{ params: { date: string } }) {
  console.log("222222222222",params);
const data:ILeague[]=await getCompetetions("football/fixtures/",{
date: params.date,
}).then(data=>data.all);

  return (
    <section className="px-4">
          {data.map((league) => (
            <League  key={league.id} leagueData={league} />
          ))}
    </section>
  );
}
