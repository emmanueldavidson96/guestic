import React from 'react'
import Image from 'next/image'

export default function PropertyCard({property_image, property_city, number_of_locations}) {
  return (
      <section className='w-[30%] flex flex-col rounded-2xl gap-1 bg-[#fff] shadow-md'>
        <Image className='w-[100%] h-[415px]' src={property_image}  alt='guestic_property'/>
        <div className='p-3'>
          <h2 className='font-bold text-xl'>{property_city}</h2>
          <p className='text-sm'>{number_of_locations}</p>
        </div>
      </section>
  )
}