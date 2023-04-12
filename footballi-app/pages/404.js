import { Link } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import NotFoundImage from "../public/images/404.png";

function NotFoundPage() {
  return (
    <div className='bg-[#F5F6FB] h-[calc(100vh-260px)] font-sans flex items-center flex-col'>
        <Image
          className="rounded-md w-full"
          src={NotFoundImage}
          alt="NotFoundImage"
        />
        <Link href="/">
          <button className="py-2 px-4 bg-[#3563E9] rounded-md text-white text-lg m-5">
            بازگشت به صفحه اصلی
          </button>
        </Link>
    </div>
  )
}

export default NotFoundPage