"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import booking_image from "../../../public/travel_blog_images/man-preparing-travel_53876-14615.webp";
import booking_image2 from "../../../public/travel_blog_images/monument-valley-utah-9.jpg";
import booking_image3 from "../../../public/travel_blog_images/travel-guard.thumb.800.480.png";
import booking_image4 from "../../../public/travel_blog_images/home-main.png";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { CiParking1 } from "react-icons/ci";
import { FaSwimmer } from "react-icons/fa";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import suite_1 from "../../../public/travel_blog_images/Screenshot 2024-04-20 123747.png";
import suite_2 from "../../../public/travel_blog_images/Screenshot 2024-04-20 124250.png";
import suite_3 from "../../../public/travel_blog_images/Screenshot 2024-04-20 124633.png";
import suite_location from "../../../public/travel_blog_images/Screenshot 2024-04-20 125101.png";
import { FaRegEdit } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import SuitesImageContainer from '@/components/SuitesImageContainer';

export default function Suites({params}) {
    const [listingInfo, setListingInfo] = useState({})
    const [listings_data, set_listings_data] = useState({})
    

  useEffect(() => {
    const handle_getListings = async () => {
        try{
            const res = await axios.get("https://guestic.onrender.com/listings")
            set_listings_data(res.data);
            console.log(listings_data)            
          }
        catch(err){
            console.log(err)
        }
    }
        handle_getListings()
    }, [])   

    useEffect(() => {
        const handleListingInfo = async () => {
            const res = await axios.get(`https://guestic.onrender.com/listings/${params.id}`)
            setListingInfo(res.data)
        }
        handleListingInfo()
    }, [])
    
  return (
    <main className="relative">
        <section className='w-full h-fit bg-orange-100 flex-col flex pt-5 pb-5 gap-8'>
            <div className='w-[90%] m-auto flex gap-8 pt-4 pb-4'>
                <div className='w-[50%] h-[400px] overflow-hidden'>
                    <img src={listingInfo?.listingImages?.[0]?.url} className='w-full h-full rounded-3xl' alt={listingInfo?.listingImages?.[0]?.caption}/>
                </div>

                <div className='flex flex-col gap-8 w-[50%]'>
                    <div className='flex gap-6 h-[180px] overflow-hidden'>
                        {
                            listingInfo?.listingImages?.length > 3 &&
                            <>
                                <img src={listingInfo?.listingImages?.[1]?.url} className='w-[45%] h-full rounded-3xl' alt={listingInfo?.listingImages?.[1]?.caption}/>
                                <img src={listingInfo?.listingImages?.[2]?.url} className='w-[45%] h-full rounded-3xl' alt={listingInfo?.listingImages?.[2]?.caption}/>                            
                            </>
                        }
                    </div>
                    {
                        listingInfo?.listingImages?.length > 5 &&
                        <>
                            <div className='flex gap-6 h-[180px] overflow-hidden'>
                                <img src={listingInfo?.listingImages?.[3]?.url} className='w-[45%] h-full rounded-3xl' alt={listingInfo?.listingImages?.[3]?.caption}/>
                                <img src={listingInfo?.listingImages?.[4]?.url} className='w-[45%] h-full rounded-3xl' alt={listingInfo?.listingImages?.[4]?.caption}/>
                            </div>                        
                        </>
                    }                    
                </div>
            </div>

            <div className='w-[90%] h-fit flex justify-between m-auto '>
                <div className='flex flex-col gap-2 w-[48%]'>
                    <p className='text-sm font-light'>{listingInfo.name}</p>
                    <h3 className='text-xl font-bold'>{listingInfo.address}, {listingInfo.city}, {listingInfo.country}</h3>
                    <p className='font-medium leading-8 text-xs text-justify'>
                        {listingInfo.description}
                    </p>
                </div>

                <div className='flex flex-col gap-8 w-[45%] '>
                    <p className='text-sm font-light'>Available amenities include:</p>
                    <div className='flex w-full justify-between'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-6'>
                                <TbToolsKitchen3 />
                                <p className='font-light text-sm'>Kitchen Utensils</p>
                            </div>

                            <div className='flex items-center gap-6'>
                                <FaWifi />
                                <p className='font-light text-sm'>Wifi</p>
                            </div>

                            <div className='flex items-center gap-6'>
                                <CgGym/>
                                <p className='font-light text-sm'>Gym</p>
                            </div>

                            <div className='flex items-center gap-6'>
                                <TbAirConditioning />
                                <p className='font-light text-sm'>Air Conditioning</p>
                            </div>

                            <div className='flex items-center gap-6'>
                                <PiTelevisionBold />
                                <p className='font-light text-sm'>Free TV Stations</p>
                            </div>

                        </div>
                        <div className='flex flex-col gap-4 mr-20'>
                            <div className='flex items-center gap-6'>
                                <CiParking1/>
                                <p className='font-light text-sm'>Parking</p>
                            </div>

                            <div className='flex items-center gap-6'>
                                <FaSwimmer/>
                                <p className='font-light text-sm'>Swimming Pool & Facilities</p>
                            </div>

                            <div className='flex items-center gap-6'>
                                <MdOutlineBedroomChild/>
                                <p className='font-light text-sm'>Room Service</p>
                            </div>

                            <div className='flex items-center gap-6'>
                                <MdOutlineLocalLaundryService />
                                <p className='font-light text-sm'>Laundry</p>
                            </div>

                            <div className='flex items-center gap-6'>
                                <BiCctv />
                                <p className='font-light text-sm'>CCTV</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex border-b-2 border-b-gray-400 gap-8 w-[100%] pl-20 pr-20 m-auto'>
                <h3 className='text-xl font-medium text-yellow-500 border-b-4 border-b-yellow-500 pb-2 cursor-pointer'>Suites</h3>
                <h3 className='text-xl font-medium text-gray-500 cursor-pointer'>Neigbourhood</h3>
            </div>

            <div className='flex flex-col w-[90%] m-auto gap-4'>
                <h4 className='text-xl font-semibold text-gray-500'>Suites (4)</h4>
                {
                    listings_data?.data && listings_data?.data.map((item, id) => {
                        return (
                            <SuitesImageContainer property_data={item} key={id}/>
                        )
                    })
                } 
            </div>

            <hr className='w-[100%] border-b-2 border-gray-300'/>

            <div className='w-[90%] h-full overflow-hidden m-auto'>
                <Image src={suite_location} className='w-full h-full'/>
            </div>

            <div className='w-[90%] m-auto flex justify-between gap-32 '>
                <div className='flex flex-col gap-4 w-[50%]'>
                    <h3 className='text-xl font-semibold'>History of area</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Mattis adipiscing lectus vitae eu turpis faucibus sit. 
                        Nisl sem amet ultrices egestas vestibulum. Praesent pulvinar in iaculis urna rhoncus luctus. 
                        Amet faucibus risus malesuada mattis elementum a ornare morbi. Ultrices ut suspendisse ac turpis elementum vitae. 
                        Sed faucibus urna pharetra in egestas lobortis. Sagittis lacus et ultrices nunc tempus ullamcorper. 
                        Ut ultrices vestibulum integer amet.
                        Quam gravida arcu tincidunt phasellus. Diam a platea lorem sit arcu rhoncus netus a risus. 
                        Accumsan eget orci urna eget dolor ligula nulla. Diam sit duis facilisis porttitor aliquam dui. Cras nec eget faucibus ut. Dolor habitasse eget nulla dictum. 
                        Eleifend quis commodo egestas mauris. Lorem non ornare mi adipiscing massa nisl. Dolor.
                    </p>
                </div>
                <div className='flex flex-col w-[50%] gap-4'>
                    <h3 className='font-semibold text-xl '>Top Nearby Places</h3>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-4 '>Ice cream 1.5km <FaRegEdit color='orange' size={20}/> </li>
                        <li className='flex items-center gap-4 '>Best Mall 0.9km <FaRegEdit color='orange' size={20}/> </li>
                        <li className='flex items-center gap-4 '>MIA airport 3.5km <FaRegEdit color='orange' size={20}/> </li>
                    </ul>

                </div>
            </div>
        </section>
    </main>
  )
}
