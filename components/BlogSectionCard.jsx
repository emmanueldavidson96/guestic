
import React from 'react'
import Image from 'next/image'
import { FaRegEye } from "react-icons/fa";


export default function BlogSectionCard({blog_image, blog_title, blog_content, blog_view, blog_date}) {
  return (
      <section className='w-[23%] flex flex-col rounded-2xl bg-[#fff] shadow-md'>
        <Image src={blog_image} className='w-full h-auto' alt='guestic_blog_image'/>
        <div className='p-4'>
          <h2 className='font-bold'>{blog_title}</h2>
          <p className='text-sm pt-3'>{blog_content}</p>
        </div>
        <div className='flex flex-row gap-x-10 p-4 justify-between items-center'>
          <p className='flex items-center gap-2'>{blog_view}<FaRegEye className='' size={20}/></p>
          <p className='text-lg'>{blog_date}</p>
        </div>
      </section>
  )
}