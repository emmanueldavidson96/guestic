import React from 'react'
import PropertyCard from './PropertyCard'
import { properties } from '@/Utils/Data'
import Image from 'next/image'
import review1 from '@/public/images/reviewImage1.png'
import review2 from '@/public/images/reviewImage2.png'
import review3 from '@/public/images/reviewImage3.png'
import review4 from '@/public/images/reviewImage4.png'
import review5 from '@/public/images/reviewImage5.png'


export default function Property() {
  return (
    <section>
      <section className='w-full bg-brownish_black flex flex-row gap-5 justify-center items-center p-10'>
        <h2 className='text-[#fff] font-bold text-xl'>Reviews:</h2>
        <div>
          <Image src={review1} alt='booking_review_card_one' />
        </div>
        <div>
          <Image src={review2} alt='booking_review_card_two' />
        </div>
                <div>
          <Image src={review3} alt='booking_review_card_three' />
        </div>
                <div>
          <Image src={review4} alt='booking_review_card_four' />
        </div>
                <div>
          <Image src={review5} alt='booking_review_card_five' />
        </div>
      </section>
      <section className='bg-[#F2ECD9]'>
      <h2 className='text-[#000] font-bold pt-10 pl-10'>Top Cities</h2>
      <section className='w-full flex items-start flex-wrap justify-around p-5'>
          {properties.map((property) => (
            <PropertyCard
              key={property.id} 
              property_image={property.img}
              property_city={property.city}
              number_of_locations={property.location}
            />
          ))}
      </section>
      <div className='flex justify-center'>
        <button className='h-[48px] w-[149px] font-bold text-md p-3 rounded-xl border border-black m-10' type='submit'>see cities</button>
      </div>
    </section>
    </section>
    
  )
}