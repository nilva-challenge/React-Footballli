import react, { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const MatchChild = ({ data})=>{
    const [open, setOpen] = useState(true)
    const teams = [data?.fixtures]
    const textStyles ='w-1/2 text-sm font-thine'
    const imageStyles ='w-8 h-8 object-contain'

return<>
    <div className='flex items-center justify-between w-full' onClick={() => setOpen(!open)}>
        <div className='flex items-center gap-2'>
            <img src={data?.logo} alt='upload' className='w-8 h-8' />
            <p className="font-bold text-blue-500 text-sm">{data?.name}</p>
        </div>
        <div>
            <ExpandLessIcon className={`${open === true ? 'rotate-0' : 'rotate-180'}`} />
        </div>
        
    </div>
    <div className={`divide-y divide-solid ${open ? '' : 'hidden'} border-t mt-10`}>
        {teams[0]?.map((i) => {
            const startDateTimes = new Date("2023-11-07T05:30:00");
            const startHour = startDateTimes.getHours().toString().padStart(2, "0");
            const startMinute = startDateTimes.getMinutes();
            return (
                <div key={i?.id} className='grid grid-cols-3 gap-1 my-4 items-center'>
                    <div className='flex items-center gap-4 w-36 py-4'>
                        <p className={textStyles}>{i?.home?.name}</p>
                        <img src={i?.home.logo} alt='upload' className={imageStyles} />
                    </div>
                    <p className='px-5 text-center'>
                        {i?.home_goals === null ? (
                            <span className='text-gray-400'>{startHour}:{startMinute}</span>) : (
                            <>
                                <span>{i.home_goals}</span>
                                <span>:</span>
                                <span>{i.away_goals}</span>
                            </>)}
                    </p>
                    <div className='flex items-center gap-2 w-36 py-4'>
                        <img src={i?.away.logo} alt='upload' className={imageStyles} />
                        <p className={textStyles}>{i?.away?.name}</p>
                    </div>
                </div>
            );
        })}
    </div>
    
</>
}
export default MatchChild