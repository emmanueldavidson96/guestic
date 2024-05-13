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
import SuitesImageSlider from './SuitesImageSlider';
import { IoBedOutline } from "react-icons/io5";
import { AiOutlineBorder } from "react-icons/ai";
import { LiaToiletSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { TbToolsKitchen3 } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { MdOutlineRoomService } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";
import { PiSwimmingPoolLight } from "react-icons/pi";
import { MdOutlineLocalLaundryService } from "react-icons/md";

export default function SuitesImageContainer({property_data}) {
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
            <SuitesImageSlider data={property_data.listingImages}/>
        </div>

        <div className='flex flex-col gap-4 w-[50%] pt-3'>
            <Link href={`/bookingpayment/${property_data.id}`}>
                <h2 className='text-2xl font-semibold'>{property_data.bedroomsNumber} Bedroom</h2>
            </Link>
            <div className='w-full h-fit flex gap-4'>
                <div className='flex items-center gap-2'>
                    <IoBedOutline size={25} color='grey'/>
                    <p className='text-sm text-gray-500'>{property_data.bedsNumber} Bed</p>
                </div>

                <div className='flex items-center gap-2'>
                    <IoIosPeople size={25} color="grey"/>
                    <p className='text-sm text-gray-500'>{property_data.guestsIncluded} Guests</p>
                </div>

                <div className='flex items-center gap-2'>
                    <AiOutlineBorder size={25} color="grey"/>
                    <p className='text-sm text-gray-500'>{property_data.squareMeters} square feet</p>
                </div>

                <div className='flex items-center gap-2'>
                    <LiaToiletSolid size={25} color="grey"/>
                    <p className='text-sm text-gray-500'>{property_data.bathroomsNumber} Bathrooms</p>
                </div>

            </div>
            {/* <p className='text-sm font-light text-grayish_brown'>{property_data.name}</p>
            <Link href={`/suites/${property_data.id}`}>
                <h3 className='text-lg font-semibold'>{property_data.address}, {property_data.street}, {property_data.city}, {property_data.country}</h3>
            </Link> */}
            <p className='text-md font-semibold'>Amenities include:</p>
            <div className='flex items-center gap-16'>
                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md '>
                        <TbToolsKitchen3 color='gray' size={20}/>
                    </div>
                    <p className='text-sm text-gray-500'>Kitchen Utensils</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>
                        <TbCircleLetterP color='gray' size={20}/>                    
                    </div>
                    <p className='text-sm text-gray-500'>Parking</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>
                        <CgGym color='gray' size={20}/>
                    </div>
                    <p className='text-sm text-gray-500'>Gym</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>
                        <MdOutlineRoomService color='gray' size={20}/>
                    </div>                
                    <p className='text-sm text-gray-500'>Room Service</p>
                </div>
            </div>
            <div className='flex items-center gap-16'>
                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>
                        <FaWifi color='gray' size={20}/>
                    </div>
                    <p className='text-sm text-gray-500'>Wifi</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>
                        <BiCctv color='gray' size={20}/>
                    </div>
                    <p className='text-sm text-gray-500'>CCTV</p>
                </div>
                
                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>                
                        <TbAirConditioning color='gray' size={20}/>
                    </div>
                    <p className='text-gray-500 text-sm'>Air Conditioning</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>                
                        <PiSwimmingPoolLight color='gray' size={20}/>
                    </div>
                    <p className='text-gray-500 text-sm'>Swimming Facilities</p>
                </div>
            </div>

            <div className='flex items-center gap-16'>
                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>
                        <PiTelevision color='gray' size={20}/>
                    </div>
                    <p className='text-gray-500 text-sm'>Free TV Stations</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='border-2 p-2 border-gray-300 rounded-md'>
                        <MdOutlineLocalLaundryService color='gray' size={20}/>
                    </div>
                    <p className='text-gray-500 text-sm'>Laundry Service</p>
                </div>
            </div>            
            
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
