import React, {useState} from 'react';
import Image from 'next/image';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import { FaWifi } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { GiHeatHaze } from "react-icons/gi";
import { PiTelevision } from "react-icons/pi";
import { FiSpeaker } from "react-icons/fi";
import { TbCircleLetterP } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import image_property from "../public/images/Screenshot 2024-05-11 130543.png";
import GeneralPropertyImageSlider from './GeneralPropertyImageSlider';
import { sliders } from '@/lib/carouselData';
import Link from 'next/link';

export default function PropertyImageCardSliders({property_data}) {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide+1)
    }

    const prevSlide = () => {
        setSlide(slide ===0 ? data.length -1 : slide-1)
    }
  return (
    <div className="w-full h-fit flex bg-white rounded-2xl shadow-2xl p-4 gap-8">
        <div className='w-[45%] h-full overflow-hidden'>
            <GeneralPropertyImageSlider data={property_data.listingImages}/>
        </div>

        <div className='flex flex-col gap-4 w-[50%] pt-3'>
            <p className='text-sm font-light text-grayish_brown'>{property_data.name}</p>
            <Link href={`/suites/${property_data.id}`}>
                <h3 className='text-lg font-semibold'>{property_data.address}, {property_data.street}, {property_data.city}, {property_data.country}</h3>
            </Link>
            <div className='flex gap-6 items-center justify-between'>
                <div className='border-2 p-3 border-gray-300 rounded-md'>
                    <FaWifi color='gray' size={20}/>
                </div>

                <div className='border-2 p-3 border-gray-300 rounded-md'>
                    <TbCircleLetterP color='gray' size={20}/>
                </div>

                <div className='border-2 p-3 border-gray-300 rounded-md'>
                    <BiDish color='gray' size={20}/>
                </div>
                
                <div className='border-2 p-3 border-gray-300 rounded-md'>
                    <GiHeatHaze color='gray' size={20}/>
                </div>

                <div className='border-2 p-3 border-gray-300 rounded-md'>
                    <PiTelevision color='gray' size={20}/>
                </div>

                <div className='border-2 p-3 border-gray-300 rounded-md'>
                    <FiSpeaker color='gray' size={20}/>
                </div>

                <div className='border-2 p-3 border-gray-300 rounded-md'>
                    <p className='text-gray-400'>+5</p>
                </div>
            </div>
            
            <hr className='w-full border-1 border-gray-600' />
            
            <p className='text-gray-400'>Options</p>
            
            <div className='w-full h-fit flex flex-col gap-4'>
                <div className='w-full h-fit flex justify-between'>
                    <div className='w-fit h-fit'>
                        <span className='text-black text-lg font-semibold'>{property_data.bedroomsNumber} Bedroom</span>
                    </div>
                    <div className='w-fit h-fit flex items-end gap-1'>
                        <span className='text-gray-400'>from</span>
                        <h2 className='text-3xl font-semibold'>${property_data.price}</h2>
                    </div>
                </div>
            </div>

            <hr className='w-full border-1 border-gray-600' />
            <div className='w-full h-4 flex items-center justify-center border-2 border-orange-400 p-6 rounded-2xl gap-3 shadow-xl'>
                <SlCalender size={25} color='orange'/>
                <p className='font-semibold text-xl text-orange-300'>Select date</p>
            </div>
        </div>
        
        {/* <div className='flex justify-center items-center w-full relative bg-white img-height'>
            <BsArrowLeftCircleFill className='absolute w-8 h-8 drop-shadow hover:cursor-pointer left-4' color={'white'} onClick={prevSlide}/>
            {
                data.map((item, idx) => {
                    return (
                        <img src={item.src} key={idx} className={slide === idx ? "rounded-t-xl w-full max-h-60 shadow-lg" : "rounded-t-xl w-full max-h-60 shadow-lg hidden"}/>
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
        </div> */}
    </div>
  )
}
