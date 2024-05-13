"use client";
import React, {useState, useEffect} from 'react'
import { CiSearch } from "react-icons/ci";
import { Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
 } from '@/components/ui/select';
import cities from '@/data/cities';
import { Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import {Calendar} from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HiMiniChevronDown, HiOutlineArrowRight } from "react-icons/hi2";
import GuestCounter from '@/components/GuestCounter';
import { FaSortAmountDown } from "react-icons/fa";
import PropertyImageCardSliders from '@/components/PropertyImageCardSliders';
import map_image from "../../public/images/Screenshot 2024-05-11 135247.png";
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";

function Destinations() {
    const [checkinDate, setCheckinDate] = useState();
    const [checkoutDate, setCheckoutDate] = useState();
    const [listings_data, set_listings_data] = useState({})
    

  useEffect(() => {
    const handle_getListings = async () => {
        try{
            const res = await axios.get("https://guestic.onrender.com/listings")
            set_listings_data(res.data);           
          }
        catch(err){
            console.log(err)
        }
    }
        handle_getListings()
    }, [])   




  return (
    <main className="relative">
        <section className='w-full h-fit bg-orange-100 flex-col flex items-center pt-12 pb-12'>
            <div className='w-[90%] m-auto h-fit flex items-center justify-between '>
                <div className='flex border-2 border-grayish_brown pt-2 pb-2 pl-2 pr-2 items-center gap-2 rounded-lg'>
                    <CiSearch size={25} />
                    <input placeholder='Miami' className='w-full bg-transparent p-2 border-none outline-none'/>                
                </div>

                <div className="border-2 border-grayish_brown pt-4 pb-4 pl-6 pr-6 rounded-lg">
                    <Select className="w-full h-full">
                        <SelectTrigger className="sm2:w-[45%] md:w-[25%] xl:w-fit outline-none border-none flex gap-2 items-center justify-center">
                            <SelectValue placeholder="Neigbourhood" />
                        </SelectTrigger>
                        <SelectContent>
                            {cities.map((city) => (
                                <SelectItem key={city.id} value={city.city}>
                                    {city.city} ({city.code})
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className='border-2 border-grayish_brown pt-2 pb-2 pl-3 pr-3 w-[320px]  rounded-lg flex items-center justify-between'>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"ghost"}
                                className={cn(
                                "sm2:w-[45%] md:w-[25%] xl:w-fit text-[#A59877] justify-between text-left font-normal hover:bg-transparent"
                                )}
                            >
                                <section className="flex">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {checkinDate ? format(checkinDate, "PPP") : <span>Check-in</span>}
                                </section>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={checkinDate}
                                onSelect={setCheckinDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>

                    <HiOutlineArrowRight className="hidden md:flex" />

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"ghost"}
                                className={cn(
                                "sm2:w-[45%] md:w-[25%] xl:w-fit text-[#A59877] justify-start text-left font-normal hover:bg-transparent"
                                )}
                            >
                                <section className="flex">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {checkoutDate ? (
                                        format(checkoutDate, "PPP")
                                    ) : (
                                        <span>Check-out</span>
                                    )}
                                </section>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={checkoutDate}
                                onSelect={setCheckoutDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>

                </div>

                <div className='border-2 border-grayish_brown pt-4 pb-4 pl-4 pr-4 w-[200px] rounded-lg'>
                    <GuestCounter/>
                </div>

                <div className='border-2 border-grayish_brown pt-4 pb-4 pl-4 pr-4 w-fit flex items-center gap-4 rounded-lg cursor-pointer'>
                    <FaSortAmountDown size={20}/>
                    <p>Price</p>
                </div>

                <div className='border-2 border-grayish_brown pt-4 pb-4 pl-4 pr-4 w-fit flex items-center gap-4 rounded-lg cursor-pointer'>
                    <FaSortAmountDown size={20}/>
                    <p>Distance</p>
                </div>
            </div>

            <div className='w-[90%] m-auto mt-12 flex justify-between'>
                <div className='w-[65%] h-fit '>
                    <h2 className='text-2xl font-semibold'>4 properties in Miami</h2>
                    <p>{listings_data.status}</p>
                    <div className='h-[1200px] w-full pt-6 pr-2 overflow-scroll gap-6 flex flex-col overflow-x-hidden'>                        
                        {
                            listings_data?.data && listings_data?.data.map((item, id) => {
                                return (
                                    <PropertyImageCardSliders property_data={item} key={id}/>
                                )
                            })
                        }                         
                                                                      
                        {/* <PropertyImageCardSliders />                        
                        <PropertyImageCardSliders />                        
                        <PropertyImageCardSliders />                        
                        <PropertyImageCardSliders />                                           */}
                    </div>
                </div>
                <div className='w-[32%] h-fit overflow-hidden'>
                    <Image src={map_image} className="h-[1000px] w-full" alt=''/>
                </div>        
            </div>

        </section>

    </main>
  )
}

export default Destinations