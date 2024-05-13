import React from 'react'
import Image from 'next/image'
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';

export default function SingleBlogCardComponent({blog_image}) {
  return (
    <div className='w-[100%] h-fit flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer'>
        <div className='w-full max-h-[200px] overflow-hidden'>
            <Image src={blog_image} className='h-full w-full' />
        </div>
        <div className='w-full h-fit p-3 flex flex-col gap-1'>
            <Link href="/single_blog">
                <h3 className='text-lg font-bold'>Choosing a suite for family vacation</h3>
            </Link>
            <p className='text-xs font-light'>
                Lorem ipsum dolor sit amet consectetur. Eunull turpis in at nisl rhoncus sit. 
                Purus sit et habitan justo ac. Lorem ipsum dolor sit amet consectetur.                            
            </p>
            <div className='flex w-full justify-between'>
                <div className='w-fit flex items-center gap-1'>
                    <h4 className='text-sm font-light'>620</h4>
                    <FaEye className='font-light'/>
                </div>
                <div className='w-fit flex items-center'>
                    <p className='font-light text-sm'>01-03-2024</p>
                </div>
            </div>
        </div>
    </div>  
  )
}
