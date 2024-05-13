"use client"
import Image from 'next/image';
import React, {useState} from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

function FeaturedImageCardLonger({data}) {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide+1)
    }

    const prevSlide = () => {
        setSlide(slide ===0 ? data.length -1 : slide-1)
    }
  return (
    <div className='flex justify-center items-center w-full relative bg-white img-height'>
        <BsArrowLeftCircleFill className='absolute w-8 h-8 drop-shadow hover:cursor-pointer left-4' color={'white'} onClick={prevSlide}/>
        {
            data.map((item, idx) => {
                return (
                    <img src={item.src} key={idx} className={slide === idx ? "rounded-t-xl w-full max-h-60 shadow-lg" : "rounded-t-xl w-full max-h-60 shadow-lg hidden"} alt=""/>
                )})

        }        
        <BsArrowRightCircleFill className='absolute w-8 h-8 drop-shadow hover:cursor-pointer right-4' color={'white'} onClick={nextSlide}/>
        <span className='flex absolute bottom-3'>
            {
                data.map((_,idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "h-2.5 w-2.5 bg-white rounded-full border-none outline-none shadow-lg ms-2 cursor-pointer" : "h-2.5 w-2.5 rounded-full border-white border-2 outline-none shadow-lg ms-2 cursor-pointer bg-transparent"}> </button>
                })
            }
        </span>

    </div>
  )
}

export default FeaturedImageCardLonger