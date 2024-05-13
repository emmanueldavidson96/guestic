import React from 'react'
import Image from 'next/image'
import travel_image from "../../public/images/107185268-1674841615778-gettyimages-1457910259-a7404995.jpeg";
import { BlogPageData } from '@/Utils/BlogPageData';
import BlogCardComponent from '@/components/blogpage_components/BlogCardComponent';

function Blog() {
  return (
    <main className="relative">
        <section className='w-full h-fit bg-orange-100 flex-col flex items-center pt-2 pb-2'>
            <div className='w-[90%] m-auto h-12 flex items-center pt-2 pb-2'>
                <h2 className='text-2xl font-bold'>Blog News</h2>
            </div>
            <Image src={travel_image} className='w-full h-[600px]' alt=''/>
            <section className='w-[90%] m-auto h-fit pt-8 pb-8'>
                <h3 className='text-xl font-bold'>Best time of the year for different Vacations</h3>
                <p className='text-sm leading-6'>
                    Embarking on a family vacation is a thrilling endeavor that promises cherished moments and lifelong memories. 
                    Proper planning ensures that every family member, from the youngest to the oldest, 
                    enjoys a stress-free and delightful experience. Here is a comprehensive guide to help you plan 
                    the perfect family getaway. Set Clear Objectives: Define the purpose of your vacation. 
                    Whether its relaxation, adventure, or cultural exploration, 
                    having a clear objective will guide your destination and activity choices.
                </p>
            </section>
            <div className='flex gap-4 justify-start items-center w-[90%] m-auto'>
                <button className='bg-gray-400 font-semibold text-black rounded-md pt-2 pb-2 pl-6 pr-6'>All</button>
                <button className='font-semibold text-gray-400 border-2 pt-2 pb-2 pl-3 pr-3 border-gray-400 rounded-md'>Miami</button>
                <button className='font-semibold text-gray-400 border-2 pt-2 pb-2 pl-3 pr-3 border-gray-400 rounded-md'>Atlanta</button>
                <button className='font-semibold text-gray-400 border-2 pt-2 pb-2 pl-3 pr-3 border-gray-400 rounded-md'>Latest</button>
                <button className='font-semibold text-gray-400 border-2 pt-2 pb-2 pl-3 pr-3 border-gray-400 rounded-md'>Toronto</button>
            </div>   
            <hr className='w-[90%] mt-3 mb-16 h-[1px] bg-slate-500'/>
            <div className='flex w-[90%] m-auto flex-wrap items-start justify-start gap-6 mb-10'>
                {
                    BlogPageData.map((blog) => (
                        <BlogCardComponent key={blog.id} blog_image={blog.image} />
                    ))
                }                              
            </div>         
        </section>     
    </main>
  )
}

export default Blog