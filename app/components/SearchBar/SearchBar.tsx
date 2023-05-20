import { IconSearch } from "@tabler/icons-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className={"w-full h-12 px-5 py-2"}>
      <div className='h-full relative flex flex-row items-center'>
        <input
          className='w-full h-full bg-gray-100 border-none rounded-sm text-xs px-8 outline-none'
          type='text'
          name='search'
          id='search'
          placeholder='جستجو...'
        />
        <IconSearch className='absolute right-1 text-gray-400' size={20} />
      </div>
    </div>
  );
};

export default SearchBar;
