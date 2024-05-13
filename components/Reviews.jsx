"use client"
import React from 'react'
import ReviewsCard from './ReviewsCard'
import { reviews } from '@/Utils/Data'
import Link from 'next/link'

export default function Reviews() {

  return (
    <section className='bg-[#FFF] w-[90%] m-auto flex flex-col gap-4 pb-12'>
      <section className='pl-3 pt-8 flex flex-col gap-2'>
        <h2 className='font-bold pt-10 text-3xl'>Reviews From Our Guests</h2>
        <p className='text-lg pb-10 font-light'>Hear what our guests have to say about their unforgettable experiences. Real Stories, real satisfaction. Join the community of those who chose to stay with us.</p>
      </section>
      <section className='w-full flex items-start flex-wrap justify-between'>
          {
            reviews.map((review) => (
              <ReviewsCard key={review.author} review_author={review.author} review_text={review.text} review_location={review.location}/>
            ))
          }
      </section>
      <div className='flex justify-center'>
        <Link href="/customersreview">
          <button className='h-[52px] w-[160px] font-bold text-md rounded-xl border border-black mt-12 p-2' type='submit'>See more</button>
        </Link>
      </div>
    </section>
  )
}