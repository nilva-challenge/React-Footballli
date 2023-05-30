import { SearchIcon } from '@/constants/svgIcons'
import React from 'react'
interface IProps{
    placeholder:string,
}
const SearchInput = ({placeholder}:IProps) => {
  return (
 <form className='relative my-4'>
       <input placeholder={placeholder} className='bg-mainbg text-base text-dark  font-medium w-full h-12 rounded pr-14 placeholder:text-gray1 placeholder:text-lg placeholder:font-bold'/>
       <button type='submit' className='absolute top-[50%] -translate-y-[50%] right-4 rotate-90'>
     <SearchIcon/>
       </button>
 </form>
  )
}

export default SearchInput