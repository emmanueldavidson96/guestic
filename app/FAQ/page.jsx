"use client"
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
    const [itemSix, setItemSix] = useState(false)
    const handleItemSix = () => {
        setItemSix(!itemSix)
    }
    const [itemSeven, setItemSeven] = useState(false)
    const handleItemSeven = () => {
        setItemSeven(!itemSeven)
    }
    const [itemEight, setItemEight] = useState(false)
    const handleItemEight = () => {
        setItemEight(!itemEight)
    }
    const [itemNine, setItemNine] = useState(false)
    const handleItemNine = () => {
        setItemNine(!itemNine)
    }
    const [itemTen, setItemTen] = useState(false)
    const handleItemTen = () => {
        setItemTen(!itemTen)
    }
    
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center bg-yellow-100 pt-8'>
        <div className='w-10/12 m-auto flex flex-col gap-4 '>
            <h2 className='font-bold text-5xl'>Frequently Asked Questions</h2>
            <div className='border-b border-slate-900 pt-6 pb-6'>
                <ul>
                    <div className='flex items-center justify-between'>
                        <li onClick={handleItemOne} className='list-disc font-semibold cursor-pointer text-lg '>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemOne} cursor={"pointer"}/>
                    </div>
                    {
                        itemOne &&
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <li onClick={handleItemSix} className='list-disc font-semibold cursor-pointer text-lg '>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemSix} cursor={"pointer"}/>
                    </div>
                    {
                        itemSix &&
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <li onClick={handleItemSeven} className='list-disc font-semibold cursor-pointer text-lg '>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemSeven} cursor={"pointer"}/>
                    </div>
                    {
                        itemSeven &&
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <li onClick={handleItemEight} className='list-disc font-semibold cursor-pointer text-lg '>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemEight} cursor={"pointer"}/>
                    </div>
                    {
                        itemEight &&
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <li onClick={handleItemNine} className='list-disc font-semibold cursor-pointer text-lg '>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemNine} cursor={"pointer"}/>
                    </div>
                    {
                        itemNine &&
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
                        <li onClick={handleItemTen} className='list-disc font-semibold cursor-pointer text-lg '>Can I adjust my check in and check out time?</li>
                        <IoIosArrowDown size={25} onClick={handleItemTen} cursor={"pointer"}/>
                    </div>
                    {
                        itemTen &&
                        <p className='text-sm pt-8 pl-4 pb-4 pr-8'>
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
            <div className='mt-16 mb-16 flex flex-col gap-2 items-center'>
                <p className='font-semibold'>Question not answered?</p>
                <button className='w-96 p-4 bg-yellow-500 rounded-lg text-white'>
                    Contact Customer Service
                </button>
            </div>            
        </div>
    </div>
  )
}

export default FrequentlyAskedQuestions