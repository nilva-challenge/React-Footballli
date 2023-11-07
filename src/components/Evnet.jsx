import react, { useState } from 'react'
import { Tabs } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import Matches from './Mathches.jsx'
import { toJalaali } from 'jalaali-js';

const event = () => {
    const [active, setActive] = useState('1')
    const currentDate = new Date();
    const today = currentDate.toISOString().split('T')[0];
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    const yesterdayDate = yesterday.toISOString().split('T')[0];

    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split('T')[0];

    const aftertomorrow = new Date(currentDate);
    aftertomorrow.setDate(currentDate.getDate() + 2);
    const aftertomorrowDate = aftertomorrow.toISOString().split('T')[0];

    const afteraftertomorrow = new Date(currentDate);
    afteraftertomorrow.setDate(currentDate.getDate() + 3);
    const afteraftertomorrowDate = afteraftertomorrow.toISOString().split('T')[0];

    const gregorianDate = new Date(aftertomorrow); // November is month 10 in JavaScript Date object
    const gregorianDates = new Date(afteraftertomorrow)
    // Convert Gregorian date to Jalali date
    const jalaliDate = toJalaali(gregorianDate);
    const aftertomarowjalaliDate = toJalaali(gregorianDates);

    const data = [{
        id: 0,
        title: 'دیروز',
        value: '1',
        date: yesterdayDate
    }, {
        id: 1,
        title: 'امروز',
        value: '2',
        date: today
    }, {
        id: 2,
        title: 'فردا',
        value: '3',
        date: tomorrowDate
    }, {
        id: 3,
        title: `${jalaliDate.jd} ${jalaliDate.jm == 8 ? 'آبان':'آذر'}`,
        value: '4',
        date: aftertomorrowDate
    }, {
        id: 4,
        title: `${aftertomarowjalaliDate.jd} ${aftertomarowjalaliDate.jm == 8 ? 'آبان':'آذر'
}`,
        value: '5',
        date: afteraftertomorrowDate
    }];
    
    return (
        <div className='w-full h-10'>
            <MantineProvider className='w-full'>
                <Tabs keepMounted={false} defaultValue='1'>
                    <Tabs.List className='w-full flex items-center gap-10 px-5 pt-5'>
                        {data.map((i) => (
                            <Tabs.Tab
                                key={i.id}
                                value={i.value}
                                onClick={() => setActive(i.value)}
                                className={`font-bold ${i.value === active ? 'underline underline-offset-8 decoration-green-700 decoration-2' : 'text-gray-400'}`}>
                                {i.title}
                            </Tabs.Tab>))}
                    </Tabs.List>
                    <div className='w-full h-full px-5 py-5 pb-20'>
                        {data.map((i) => <Tabs.Panel key={i.id} value={i.value}><Matches value={i.date} /></Tabs.Panel> )}
                    </div>
                </Tabs>
            </MantineProvider>
        </div>
    );
};

export default event;