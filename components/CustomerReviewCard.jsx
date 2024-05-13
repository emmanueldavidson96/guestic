import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

export default function CustomerReviewCard({profile_image, author, location, text}) {
  return (
    <section className='w-[30%] flex flex-col justify-center items-center gap-2 rounded-2xl bg-[#fff] shadow-md mb-5 p-4'>
      <section className='flex flex-row items-center justify-between gap-2'>
        <Image className='w-[80px] h-[80px] rounded-full mt-5' src={profile_image} alt='userImage' />
        <div className='flex flex-col gap-1'>
          <p className='font-bold text-md'>{author}</p>
          <p className='text-sm'>{location}</p>
          <div className='flex gap-1'>
            <FaStar color='orange' />
            <FaStar color='orange'/>
            <FaStar color='orange'/>
            <FaStar color='orange'/>
            <FaStar color='orange'/>
          </div>
        </div>
      </section>
      <p className='m-5'>{text}</p>
    </section>
  )
}
