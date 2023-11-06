import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {convertToPersianDate, generateDateList} from "@/constant/utils";

const DatePicker: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [selectedItem, setSelectedItem] = useState(0);
    const [lastDateLoadedIndex, setLastDateLoadedIndex] = useState(0);
    const [lastDateLoaded, setLastDateLoaded] = useState<string>();
    const [dateList, setDateList] = useState<string[]>();
    const router = useRouter();

    useEffect(() => {
        const arr = generateDateList(5)
        setDateList(arr)
        setLastDateLoadedIndex(5)
        setLastDateLoaded(arr?.[arr?.length - 1])
    }, [])

    const handleClickItem = (index: number) => {
        if (ref.current) {
            if (index > selectedItem) {
                ref.current.scrollLeft -= 100;
                if (lastDateLoadedIndex - index < 2) {
                    const arr = dateList?.concat(generateDateList(5, lastDateLoaded))
                    setDateList(arr)
                    setLastDateLoadedIndex(index)
                    setLastDateLoaded(arr?.[arr?.length - 1])
                }
            } else {
                ref.current.scrollLeft += 100;
            }
            setSelectedItem(index)
            if (dateList) {
                replaceDate(dateList[index])
            }
        }
    };

    const replaceDate = (newDate: string) => {
        router.replace({
            pathname: router.pathname,
            query: {...router.query, date: newDate},
        });
    };

    return (
        <div className='py-4'>
            <ul ref={ref} className='flex flex-row gap-12 overflow-y-auto scroll-smooth overflow-hidden'>
                {
                    dateList?.map((name: string, index: number) => {
                        return (
                            <li key={`item-${index}`} onClick={() => handleClickItem(index)} className='cursor-pointer whitespace-nowrap'>
                                <p className={`${selectedItem === index ? 'text-blue-500' : 'text-gray-700'}`}>{convertToPersianDate(name)}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default DatePicker;
