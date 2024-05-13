import React from 'react'
import Image from 'next/image';
import background_img from "./deserted-beach-travel-800x450.jpg";

function Explore() {
  return (
    <div className='w-full flex h-screen bg-center bg-cover relative '>
        <Image src={background_img} className='w-full h-full object-cover ' alt=''/>
        <div style={{ backgroundColor: 'black', opacity: 0.3, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1 }} />
        <div className='flex flex-col gap-6 absolute top-[350px] left-[120px] w-[550px] text-left items-start z-20'>
            <h2 className='text-3xl font-bold'>Explore our Luxurious Amenities</h2>
            <p className='font-medium text-lg'>
                Immerse yourself in the unparalled comfort and convenience of our hotels amenities. Watch the video below to discover the indulgent
                experiences awaiting you during your stay with us.
            </p>
            <button className='w-[200px] h-[60px] border-2 border-black rounded-lg font-extrabold'>
                Watch Video
            </button>


        </div>
    </div>
  )
}

export default Explore