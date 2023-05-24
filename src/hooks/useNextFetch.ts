import { IParams } from "@/shared/types";
const BASE_URL="https://core-sport-api.zarebin.ir/api/";
export const useNextFetch=async(path:string,params:IParams)=>{
    const response=await fetch(`${BASE_URL+path}/?date=${params.date}`,{
        method:"GET",
        cache:"force-cache",
        next:{revalidate:10},
    })
const data=await response.json();
return data.all;
}