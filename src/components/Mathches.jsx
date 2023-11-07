import react, { useState,useEffect } from 'react'
import axios from 'axios';
import MatchChild from './MatchChild.jsx'
import Skeleton from '@mui/material/Skeleton';
const Matches =({value})=>{
   
    const [data, setdata] = useState([]);
    const [loading,setLoading]=useState(true)
    const loadingStyles ='rounded w-full h-20 p-5 rounded-lg  my-3'
    useEffect(()=>{
        axios.get(`https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${value}`)
            .then(response => {
                // Handle the successful response here
                setdata(response.data);
                setLoading(false)
            })
            .catch(error => {
                // Handle any errors
console.error('Error status:', error.response.status);});},[])

   
    return <>
        {loading === true &&<>
            <Skeleton variant="rounded" className={loadingStyles} width={40} height={40} />
            <Skeleton variant="rounded" className={loadingStyles} width={40} height={40} />
            <Skeleton variant="rounded" className={loadingStyles} width={40} height={40} />
            <Skeleton variant="rounded" className={loadingStyles} width={40} height={40} />
            <Skeleton variant="rounded" className={loadingStyles} width={40} height={40} />
        </>}
        {data?.all?.map(i => <div key={i.id} className='w-full h-full p-5 rounded-lg shadow-lg bg-white my-3 overflow-x-hidden'>
            <MatchChild data={i}/>
        </div>)}
    </>
}
export default Matches