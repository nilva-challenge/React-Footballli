/* eslint-disable @next/next/no-img-element */
'use client';

import { All, Fixture } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  data: All;
  search: string;
};

const handleShowPropData = (fixture: Fixture) => {
  if (fixture.status === 'NS') {
    return new Date(fixture.start_time)
      .toLocaleDateString('fa', {
        hour: '2-digit',
        minute: '2-digit',
      })
      .split(',')[1];
  } else {
    return `${fixture.home_goals.toLocaleString(
      'fa',
    )} - ${fixture.away_goals.toLocaleString('fa')}`;
  }
};

// TODO: Add animation for the accordion

const LeagueCard = ({ data, search }: Props) => {
  const [accordionIsOpen, setAccordion] = useState(true);

  const handleShow = () => {
    let isShown = false;

    for (let fixture of data.fixtures) {
      if (
        fixture.home.name.includes(search) ||
        fixture.away.name.includes(search)
      ) {
        isShown = true;
        break;
      }
    }

    return isShown;
  };

  return (
    <>
      {handleShow() && (
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <div className="font-bold text-blue-500">لیگ برتر ؟</div>
            </div>
            <Image
              src="/assets/icons/angle-small-down.svg"
              width={24}
              height={24}
              alt="Accordion opener"
              onClick={() => setAccordion(!accordionIsOpen)}
              className={accordionIsOpen ? 'transform rotate-180' : ''}
            />
          </div>

          {accordionIsOpen && (
            <>
              <hr />
              <div className="mt-4">
                {data.fixtures
                  .filter(
                    (fixture) =>
                      fixture.home.name.includes(search) ||
                      fixture.away.name.includes(search),
                  )
                  .map((fixture, index) => (
                    <React.Fragment key={fixture.id}>
                      {index !== 0 && <hr className="" />}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 45px 50px 45px 1fr',
                        }}
                        className="items-center gap-x-2 my-4"
                      >
                        <div className="truncate whitespace-nowrap w-20 text-left justify-self-end">
                          {fixture.home.name}
                        </div>
                        <img
                          src={fixture.home.logo}
                          alt=""
                          width={45}
                          height={45}
                        />
                        <div className="justify-self-center">
                          {handleShowPropData(fixture)}
                        </div>
                        <img
                          src={fixture.away.logo}
                          alt=""
                          width={45}
                          height={45}
                        />
                        <div className="truncate whitespace-nowrap w-20">
                          {fixture.away.name}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default LeagueCard;
