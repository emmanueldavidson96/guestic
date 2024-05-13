import React from 'react'
import { blogs } from '@/Utils/Data'
import BlogSectionCard from './BlogSectionCard'
import Link from 'next/link'

export default function BlogSection() {
  return (
    <section className='bg-[#EEEEFC] w-10/12 m-auto'>
      <div className='pl-3'>
        <h2 className='font-bold pt-10 text-3xl'>Blog News Article</h2>
        <p className='text-lg pb-10'>Your Home Away for Home</p>
      </div>
      <section className='w-full flex items-start flex-wrap justify-around'>
          {
            blogs.map((blog) => (
              <BlogSectionCard key={blog.id} blog_image={blog.img} blog_title={blog.title} 
              blog_content={blog.content} blog_view={blog.views} blog_date={blog.date}/>
            ))
          }
      </section>
      <div className='flex justify-center'>
        <Link href="/blog">
          <button className='h-[48px] w-[149px] font-semibold text-md rounded-xl border border-black m-10' type='submit'>Open blog</button>
        </Link>
      </div>
    </section>
  )
}