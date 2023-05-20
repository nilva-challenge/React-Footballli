import React from "react";
import { IFixture } from "@/app/Types/IFixture";
import { ILeague } from "@/app/Types/ILeague";
import Image from "next/image";

const League = ({ info }: { info: ILeague }) => {
  return (
    <div className='w-100 bg-white shadow-md rounded-2xl'>
      <div className='flex flex-row gap-2 px-4 py-3 border-b-gray-400 border-b'>
        <Image
          src={info.logo}
          alt='fixture logo'
          width={10}
          height={10}
          className='w-5 h-5'
        />
        <h2 className='font-bold text-blue-700 block'>{info.name}</h2>
      </div>
      <div className='px-4 py-2'>
        {info.fixtures.map((fixture) => (
          <div key={fixture.id}>{fixture.id}</div>
        ))}
      </div>
    </div>
  );
};

export default League;
