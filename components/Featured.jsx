import React,{useState, useEffect} from 'react'
import FeaturedLargeComponentSlider from './FeaturedLargeComponentSlider'
import FeaturedSmallComponentSlider from './FeaturedSmallComponentSlider'
import FeaturedLongSlider from './FeaturedLongSlider'
import axios from 'axios';
import { IoBedOutline } from "react-icons/io5";
import { FaToilet, FaSwimmer } from "react-icons/fa";
import Link from 'next/link';


export default function Featured() {
    const largeSliderId = 97659;
    const smallSliderId = 100196;
    const longSliderId = 103793;
    const [listingInfo, setListingInfo] = useState({})
    const [listingSmallInfo, setListingSmallInfo] = useState({})
    const [listingSmallTwoInfo, setlistingSmallTwoInfo] = useState({})

    useEffect(() => {
        const handleListingInfo = async () => {
            const res = await axios.get(`https://guestic.onrender.com/listings/97659`)
            setListingInfo(res.data)
        }
        handleListingInfo()
    }, [])

    useEffect(() => {
        const handleListingSmallInfo = async () => {
            const res = await axios.get(`https://guestic.onrender.com/listings/100196`)
            setListingSmallInfo(res.data)
        }
        handleListingSmallInfo()
    }, [])

    useEffect(() => {
        const handleListingSmallTwoInfo = async () => {
            const res = await axios.get(`https://guestic.onrender.com/listings/103793`)
            setlistingSmallTwoInfo(res.data)
        }
        handleListingSmallTwoInfo()
    }, [])

  return (
    <div className='w-full flex pt-16 pb-16 h-full bg-gray-200'>
        <div className='w-[90%] m-auto flex flex-col gap-4'>
            <h2 className='font-bold text-4xl text-yellow-900'>Featured Properties</h2>
            <p className='text-lg text-yellow-800'>Explore rooms suited to your style and budget across different cities. Find your perfect stay effortlessly.</p>
            <div className='w-full h-fit flex gap-6'>
                <div className='flex flex-col w-[44%] h-fit gap-4'>
                    <div className='w-full h-[450px] overflow-hidden bg-white rounded-t-lg rounded-bl-lg'>
                        <FeaturedLargeComponentSlider data={listingInfo?.listingImages}/>
                        <div className='flex flex-col w-full p-4 gap-2'>
                            <div className='flex w-full justify-between'>
                                <p className='text-md font-semibold text-orange-300'>{listingInfo?.bedroomsNumber} Bedroom</p>
                                <p className='font-semibold text-lg'><span className='text-gray-400 font-semibold text-xs'>from</span>${listingInfo?.price}</p>
                            </div>
                            <p className='text-gray-400 text-xs'>{listingInfo?.address}, {listingInfo?.street}, {listingInfo?.country}</p>
                            <div className='flex gap-4'>
                                <div className='flex items-center gap-1'>
                                    <IoBedOutline color='#eb8315'/>
                                    <p className='text-yellow-600'>3x</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaToilet color='#eb8315'/>
                                    <p className='text-yellow-600'>3x</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaSwimmer color='#eb8315'/>
                                    <p className='text-yellow-600'>2x</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between w-full h-fit'>
                        <div className='w-[48%] h-[450px] overflow-hidden bg-white rounded-t-lg rounded-bl-lg'>
                            <FeaturedSmallComponentSlider data={listingSmallInfo?.listingImages} />
                            <div className='flex flex-col w-full p-4 gap-2'>
                                <div className='flex w-full justify-between'>
                                    <p className='text-md font-semibold text-orange-300'>{listingInfo?.bedroomsNumber} Bedroom</p>
                                    <p className='font-semibold text-lg'><span className='text-gray-400 font-semibold text-xs'>from</span>${listingInfo?.price}</p>
                                </div>
                                <p className='text-gray-400 text-xs'>{listingInfo?.address}, {listingInfo?.street}, {listingInfo?.country}</p>
                                <div className='flex gap-4'>
                                    <div className='flex items-center gap-1'>
                                        <IoBedOutline color='#eb8315'/>
                                        <p className='text-yellow-600'>3x</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaToilet color='#eb8315'/>
                                        <p className='text-yellow-600'>3x</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaSwimmer color='#eb8315'/>
                                        <p className='text-yellow-600'>2x</p>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                        <div className='w-[48%] h-[450px] overflow-hidden bg-white rounded-t-lg rounded-bl-lg'>
                            <FeaturedSmallComponentSlider data={listingSmallTwoInfo?.listingImages} />
                            <div className='flex flex-col w-full p-4 gap-2'>
                                <div className='flex w-full justify-between'>
                                    <p className='text-md font-semibold text-orange-300'>{listingInfo?.bedroomsNumber} Bedroom</p>
                                    <p className='font-semibold text-lg'><span className='text-gray-400 font-semibold text-xs'>from</span>${listingInfo?.price}</p>
                                </div>
                                <p className='text-gray-400 text-xs'>{listingInfo?.address}, {listingInfo?.street}, {listingInfo?.country}</p>
                                <div className='flex gap-4'>
                                    <div className='flex items-center gap-1'>
                                        <IoBedOutline color='#eb8315'/>
                                        <p className='text-yellow-600'>3x</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaToilet color='#eb8315'/>
                                        <p className='text-yellow-600'>3x</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaSwimmer color='#eb8315'/>
                                        <p className='text-yellow-600'>2x</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[44%] h-fit gap-4'>
                    <div className='w-full h-[450px] overflow-hidden bg-white rounded-t-lg rounded-bl-lg'>
                        <FeaturedLargeComponentSlider data={listingInfo?.listingImages}/>
                        <div className='flex flex-col w-full p-4 gap-2'>
                            <div className='flex w-full justify-between'>
                                <p className='text-md font-semibold text-orange-300'>{listingInfo?.bedroomsNumber} Bedroom</p>
                                <p className='font-semibold text-lg'><span className='text-gray-400 font-semibold text-xs'>from</span>${listingInfo?.price}</p>
                            </div>
                            <p className='text-gray-400 text-xs'>{listingInfo?.address}, {listingInfo?.street}, {listingInfo?.country}</p>
                            <div className='flex gap-4'>
                                <div className='flex items-center gap-1'>
                                    <IoBedOutline color='#eb8315'/>
                                    <p className='text-yellow-600'>3x</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaToilet color='#eb8315'/>
                                    <p className='text-yellow-600'>3x</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaSwimmer color='#eb8315'/>
                                    <p className='text-yellow-600'>2x</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between w-full h-fit'>
                        <div className='w-[48%] h-[450px] overflow-hidden bg-white rounded-t-lg rounded-bl-lg'>
                            <FeaturedSmallComponentSlider data={listingSmallInfo?.listingImages} />
                            <div className='flex flex-col w-full p-4 gap-2'>
                                <div className='flex w-full justify-between'>
                                    <p className='text-md font-semibold text-orange-300'>{listingInfo?.bedroomsNumber} Bedroom</p>
                                    <p className='font-semibold text-lg'><span className='text-gray-400 font-semibold text-xs'>from</span>${listingInfo?.price}</p>
                                </div>
                                <p className='text-gray-400 text-xs'>{listingInfo?.address}, {listingInfo?.street}, {listingInfo?.country}</p>
                                <div className='flex gap-4'>
                                    <div className='flex items-center gap-1'>
                                        <IoBedOutline color='#eb8315'/>
                                        <p className='text-yellow-600'>3x</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaToilet color='#eb8315'/>
                                        <p className='text-yellow-600'>3x</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaSwimmer color='#eb8315'/>
                                        <p className='text-yellow-600'>2x</p>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                        <div className='w-[48%] h-[450px] overflow-hidden bg-white rounded-t-lg rounded-bl-lg'>
                            <FeaturedSmallComponentSlider data={listingSmallTwoInfo?.listingImages} />
                            <div className='flex flex-col w-full p-4 gap-2'>
                                <div className='flex w-full justify-between'>
                                    <p className='text-md font-semibold text-orange-300'>{listingInfo?.bedroomsNumber} Bedroom</p>
                                    <p className='font-semibold text-lg'><span className='text-gray-400 font-semibold text-xs'>from</span>${listingInfo?.price}</p>
                                </div>
                                <p className='text-gray-400 text-xs'>{listingInfo?.address}, {listingInfo?.street}, {listingInfo?.country}</p>
                                <div className='flex gap-4'>
                                    <div className='flex items-center gap-1'>
                                        <IoBedOutline color='#eb8315'/>
                                        <p className='text-yellow-600'>3x</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaToilet color='#eb8315'/>
                                        <p className='text-yellow-600'>3x</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaSwimmer color='#eb8315'/>
                                        <p className='text-yellow-600'>2x</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <Link href="/destinations" className='w-fit h-fit self-center'>
                <button className='w-[200px] h-[60px] bg-orange-300 text-white rounded-lg text-center self-center'>Book now!</button>
            </Link>       
        </div>
    </div>
            
        
  )
}
