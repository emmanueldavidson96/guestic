"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

function FrequentlyAskedQuestions() {
    const [itemOne, setItemOne] = useState(false)
    const handleItemOne = () => {
        setItemOne(!itemOne)
    }
    const [itemTwo, setItemTwo] = useState(false)
    const handleItemTwo = () => {
        setItemTwo(!itemTwo)
    }
    const [itemThree, setItemThree] = useState(false)
    const handleItemThree = () => {
        setItemThree(!itemThree)
    }
    const [itemFour, setItemFour] = useState(false)
    const handleItemFour = () => {
        setItemFour(!itemFour)
    }
    const [itemFive, setItemFive] = useState(false)
    const handleItemFive = () => {
        setItemFive(!itemFive)
    }
    
  return (
    <div className='w-full h-screen flex items-center justify-center bg-white'>
        <div className='w-10/12 m-auto flex flex-col gap-3 '>
            <h2 className='font-bold text-5xl '>Frequently Asked Questions</h2>
            <p className='text-md text-yellow-800'>Get answers to your questions and if you don't, please get in touch with us. We will reply you ASAP!</p>
            <div className='border-b border-slate-900 pt-6 pb-6'>
                <ul>
                    <div className='flex items-center justify-between'>
                        <li onClick={handleItemOne} className='list-disc font-semibold cursor-pointer text-lg '>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemOne} cursor={"pointer"}/>
                    </div>
                    {
                        itemOne &&
                        <p className='text-md font-normal pt-8 pl-4 pb-4 pr-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!
                        </p>
                    }
                </ul>
            </div>
            <div className='border-b border-slate-900 pt-6 pb-6'>
                <ul>
                    <div className='flex items-center justify-between'>
                        <li onClick={handleItemTwo} className='list-disc font-semibold cursor-pointer text-lg'>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemTwo} cursor={"pointer"}/>
                    </div>
                    {
                        itemTwo &&
                        <p className='text-md font-normal pt-8 pl-4 pb-4 pr-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!
                        </p>
                    }
                </ul>
            </div>
            <div className='border-b border-slate-900 pt-6 pb-6'>
                <ul>
                    <div className='flex items-center justify-between'>
                        <li onClick={handleItemThree} className='list-disc font-semibold cursor-pointer text-lg'>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemThree} cursor={"pointer"}/>
                    </div>
                    {
                        itemThree &&
                        <p className='text-md font-normal pt-8 pl-4 pb-4 pr-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!
                        </p>
                    }
                </ul>
            </div>
            <div className='border-b border-slate-900 pt-6 pb-6'>
                <ul>
                    <div className='flex items-center justify-between'>
                        <li onClick={handleItemFour} className='list-disc font-semibold cursor-pointer text-lg'>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemFour} cursor={"pointer"}/>
                    </div>
                    {
                        itemFour &&
                        <p className='text-md font-normal pt-8 pl-4 pb-4 pr-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!
                        </p>
                    }
                </ul>
            </div>
            <div className='border-b border-slate-900 pt-6 pb-6'>
                <ul>
                    <div className='flex items-center justify-between'>
                        <li onClick={handleItemFive} className='list-disc font-semibold cursor-pointer text-lg'>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemFive} cursor={"pointer"}/>
                    </div>
                    {
                        itemFive &&
                        <p className='text-md font-normal pt-8 pl-4 pb-4 pr-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quibusdam maiores saepe obcaecati dicta vel earum ex rerum, 
                            ab esse modi nesciunt cumque dolor quidem harum est illo cum ad. Magni!
                        </p>
                    }
                </ul>
            </div>                
            <div className='flex items-center justify-center mt-8'>
                <Link href="/faq">
                    <button className='pr-12 pl-12 pt-5 pb-5 rounded-lg font-bold border-2 border-black'>
                        Open FAQ
                    </button>                
                </Link>                
            </div>
        </div>

    </div>
  )
}

export default FrequentlyAskedQuestions