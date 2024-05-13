import React from 'react'
import CustomerReviewCard from '@/components/CustomerReviewCard'
import { customer_reviews } from '@/Utils/Data'
import { VscArrowCircleLeft } from "react-icons/vsc";
import { VscArrowCircleRight } from "react-icons/vsc";

export default function CustomerReview() {
  return (
    <section className='bg-[#F8F4EC] w-[90%] m-auto'>
      <h2 className='font-bold text-2xl p-10'>Customers Review</h2>
      <section className='w-full flex items-start flex-wrap justify-around'>
        {
          customer_reviews.map((cus_review) => (
            <CustomerReviewCard key={cus_review.id} profile_image={cus_review.profile_image} author={cus_review.author} location={cus_review.location} text={cus_review.text} />
          ))
        }
      </section>
      <section className='flex flex-row items-center justify-center gap-6'>
        <button className='flex mb-10 hover:underline items-center'><VscArrowCircleLeft className='pt-1' size={25}/>Previous</button>
        <button className='flex mb-10 hover:underline items-center'>Next<VscArrowCircleRight className='pt-1' size={25} /></button>
      </section>
    </section>
  )
}
