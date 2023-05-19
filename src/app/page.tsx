"use client";
import League from '@/components/widgets/League';
import useFetch from '@/hooks/useFetch';
import { formatDate } from '@/utils/formatDate';

import { useSearchParams } from 'next/navigation';
export default function Home() {
  const searchParams = useSearchParams();
  const date = searchParams.get('date');
const {isLoading, error, data, refetchData }=useFetch("football/fixtures/",{
  date:date?date:formatDate(new Date(),'en-uk')
})

  return (
<section className='px-4'>
  {data.map((league)=><League key={league.id} leagueData={league}/>)}

</section>
  )
}
