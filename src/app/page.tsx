"use client";
import LoaderVortex from "@/components/common/loader";
import League from "@/components/widgets/League";
import useFetch from "@/hooks/useFetch";
import { formatDate } from "@/utils/formatDate";

import { useSearchParams } from "next/navigation";
export default function Home() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const { isLoading, error, data} = useFetch("football/fixtures/",{
      date: date ? date : formatDate(new Date(),"en-uk"),
    }
  );

  return (
    <section className="px-4">
      {isLoading ? (
    <div className="flex justify-center"><LoaderVortex /></div>
      ) : error ? (
        <h1 className="text-red-600 font-bold">خطایی رخ داده ...</h1>
      ) : (
        <>
          {data.map((league) => (
            <League key={league.id} leagueData={league} />
          ))}
        </>
      )}
    </section>
  );
}
