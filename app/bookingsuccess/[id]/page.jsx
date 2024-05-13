"use client";
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
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
import { FaRegEdit } from "react-icons/fa";

export default function BookingSuccess({params}) {
    const [listingInfo, setListingInfo] = useState({})
    useEffect(() => {
        const handleListingInfo = async () => {
            const res = await axios.get(`https://guestic.onrender.com/listings/${params.id}`)
            setListingInfo(res.data)
        }
        handleListingInfo()
    }, [])
    const new_userprice = 35
    const tax_price = 12
  return (
    <main className="relative">
        <section className='w-full h-fit bg-orange-100 flex-col flex items-center pt-12 pb-12'>
            <div className='w-[90%] m-auto h-fit flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold text-center w-full'>Thank you for booking with us!</h1>
                <div className='w-full h-[700px] bg-white rounded-xl p-6 flex flex-col relative overflow-hidden'>
                    <div className='w-[300px] h-fit bg-orange-400 absolute top-8 right-[-80px] rotate-45 pt-4 pb-4'>
                        <p className='text-white text-center font-bold text-lg'>Paid</p>
                    </div>
                    <div className='w-full h-fit flex '>
                        <img src={listingInfo?.listingImages?.[0]?.url} alt={listingInfo?.listingImages?.[0]?.caption} className='w-[600px] h-[450px] object-cover'/>
                        <div className='flex flex-col w-full gap-4 p-6'>
                            <h2 className='text-lg font-semibold text-gray-500'>{listingInfo?.bedroomsNumber} Bedrooms</h2>
                            <p className='text-md font-semibold text-gray-500'>{listingInfo?.name}</p>
                            <p className='text-sm font-medium text-gray-500'>{listingInfo?.address}, {listingInfo?.city}, {listingInfo?.country}</p>
                            <p className='text-black font-semibold'>Tuesday, March 05 - Thursday 07(2 nights)</p>
                            <div className='flex gap-6 items-center'>
                                <div className='flex flex-col p-3 border-2 rounded-md'>
                                    <p>Check in</p>
                                    <p className='font-semibold'>16:00</p>
                                </div>
                                <FaArrowRight color='black' size={20}/>
                                <div className='flex flex-col p-3 border-2 rounded-md'>
                                    <p>Check in</p>
                                    <p className='font-semibold'>11:00</p>
                                </div>                               
                            </div>
                            <hr />
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <TbToolsKitchen3 color='grey' />
                                        </div>
                                        <p className='font-light text-sm'>Kitchen Utensils</p>
                                    </div>

                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <FaWifi color="grey"/>
                                        </div>
                                        <p className='font-light text-sm'>Wifi</p>
                                    </div>

                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <CgGym color='grey'/>
                                        </div>
                                        <p className='font-light text-sm'>Gym</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 mr-20'>
                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <CiParking1 color='grey'/>
                                        </div>
                                        <p className='font-light text-sm'>Parking</p>
                                    </div>

                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <FaSwimmer color='grey'/>
                                        </div>
                                        <p className='font-light text-sm'>Swimming Pool & Facilities</p>
                                    </div>

                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <MdOutlineBedroomChild color='grey'/>
                                        </div>
                                        <p className='font-light text-sm'>Room Service</p>
                                    </div>                        
                                </div>
                                <div className='flex flex-col gap-4 mr-20'>
                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <CiParking1 color='grey'/>
                                        </div>
                                        <p className='font-light text-sm'>Parking</p>
                                    </div>

                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <FaSwimmer color='grey'/>
                                        </div>
                                        <p className='font-light text-sm'>Swimming Pool & Facilities</p>
                                    </div>

                                    <div className='flex items-center gap-6'>
                                        <div className='p-3 border rounded-lg'>
                                            <MdOutlineBedroomChild color='grey'/>
                                        </div>
                                        <p className='font-light text-sm'>Room Service</p>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='w-full h-fit flex flex-col gap-4 mt-6'>
                        <div className='flex justify-between'>
                            <p>Cost (US${listingInfo?.price})</p>
                            <p>US${listingInfo?.price}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>5% off (new user)</p>
                            <p>-US${new_userprice}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Tax</p>
                            <p>US${tax_price}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Total</p>
                            <p>US${listingInfo?.price - new_userprice - tax_price}</p>
                        </div>
                    </div>
                </div>
                <p className='flex items-center gap-2'>Want to see your booking history? <span className='flex items-center text-orange-400 gap-2 cursor-pointer'>Check history <FaArrowRight color='orange'/> </span></p>
            </div>
        </section>
    </main>
  )
}
