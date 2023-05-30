import League from "@/components/widgets/League";
import { ILeague } from "@/shared/types.d";
import { formatDate } from "@/utils/formatDate";
import { IParams } from "@/shared/types";
const BASE_URL="https://core-sport-api.zarebin.ir/api/";
export const getTodayCompetetions=async(path:string,params:IParams)=>{
    const response=await fetch(`${BASE_URL+path}/?date=${params.date}`,{
        method:"GET",
        cache:"force-cache",
        next:{revalidate:10},
    })
const data=await response.json();
return data.all;
}
export default async function Home() {
const data:ILeague[]=await getTodayCompetetions("football/fixtures/",{
  date:formatDate(new Date(),"en-uk"),
});
  return (
    <section className="px-4">
          {data.map((league) => (
            <League key={league.id} leagueData={league} />
          ))}
    </section>
  );
}
