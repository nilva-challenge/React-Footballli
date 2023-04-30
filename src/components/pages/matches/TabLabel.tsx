 
import { useEffect, useRef } from 'react';
import { RelativeDays } from '../../../shared/enums/RelativeDays';
import DateObject from 'react-date-object';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { useIntersection } from '../../../shared/hooks/useIntersection';

type TabLabelProps = {
    id:number
    isFirstOrLast:boolean
};

export const TabLabel = ({id,isFirstOrLast}: TabLabelProps) => {

    function nameLabels(id:number){

        if (RelativeDays.yesterday.id <=id && id <= RelativeDays.afterTomorrow.id){ 
          const relativeDaysValues = Object.values(RelativeDays)
          return relativeDaysValues.find(day=>day.id===id)!.label 
        }
    
        const PersianDate = new DateObject(
          {date: new Date(),
          calendar: persian, locale: persian_fa}
          );
    
        return PersianDate.add(id,'day').format("DD MMMM")
         
      }
      
      const ref =  useRef<HTMLDivElement>(null);
      const isIntersecting=useIntersection(ref)

      useEffect(() => {
        isFirstOrLast && console.log('TabLabel isIntersecting',isIntersecting,id );
      });

    return (
        <div className='tabLabel' ref={ref}>
            {nameLabels(id)}
        </div>
    );
};