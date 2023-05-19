import { useEffect, useState } from "react";
import { axiosGet } from "../utils/httpClient";
import { IParams } from "@/shared/types";
import { ILeague } from "@/shared/types.d";

const useFetch = (url:string,params:IParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<ILeague[]>([]);
  const fetchData = async () => {
    setIsLoading(true);
    try {
        const res=await axiosGet(url,params);
        setData(res?.all);
        setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    } 
  };
  useEffect(()=>{
    fetchData()
 },[params.date]);

 const refetchData = () => {
    setIsLoading(true);
    fetchData();
  };
  return { isLoading, error, data, refetchData };
};
export default useFetch;
