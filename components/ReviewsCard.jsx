"use client"
import React from 'react'

export default function ReviewsCard({review_text, review_author, review_location}) {
  return (
    <section className='w-[22%] flex flex-col justify-center items-center gap-2 rounded-3xl bg-[#F4F4F4] shadow-md p-4'>
        <p className='m-3 text-md leading-8'>{review_text}</p>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-md'>{review_author}</p>
          <p className='text-sm font-light'>{review_location}</p>
        </div>
    </section>
  )
}