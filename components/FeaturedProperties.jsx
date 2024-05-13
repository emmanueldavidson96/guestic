import React from 'react'
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import {sliders, sliders_smaller} from "../lib/carouselData.js"
const FeaturedImageCard = dynamic(() => import('./ui/FeaturedImageCard'), { ssr: false }); // Use dynamic import
import { IoBedOutline } from "react-icons/io5";
import { FaToilet, FaSwimmer } from "react-icons/fa";
import FeaturedImageCardSmaller from './ui/FeaturedImageCardSmaller.jsx';
import FeaturedImageCardLonger from './ui/FeaturedImageCardLonger.jsx';

function FeaturedProperties() {
  return (
    <div className='w-full flex flex-col pt-16 pb-16 h-full bg-gray-200'>
        <div className='w-10/12 m-auto flex flex-col gap-2'>
            <h2 className='font-bold text-4xl text-yellow-900'>Featured Properties</h2>
            <p className='text-lg text-yellow-800'>Explore rooms suited to your style and budget across different cities. Find your perfect stay effortlessly.</p>
            <div className='w-full h-auto flex justify-between pt-8 gap-8'>
                <div className='w-1/2 h-full flex flex-col gap-6'>
                    <div className='w-full h-full mt-4'>
                        <FeaturedImageCard data={sliders}/>
                        <div className='h-auto flex flex-col p-3 w-full bg-white rounded-b-xl'>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-xl text-yellow-500 font-semibold mt-2'>2 Bedroom</h3>
                                <p className='text-md text-gray-400 mt-2'>3891 Poplar Lane, Miami, FL</p>
                                <div className='flex items-center gap-4 mt-2'>
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

                    <div className='w-full h-full flex gap-4'>
                        <div className='w-1/2 h-full'>
                            <FeaturedImageCardSmaller datasmaller={sliders_smaller}/>
                            <div className='h-auto flex flex-col p-3 w-full bg-white rounded-b-xl'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-xl text-yellow-500 font-semibold mt-2'>2 Bedroom</h3>
                                    <p className='text-md text-gray-400 mt-2'>3891 Poplar Lane, Miami, FL</p>
                                    <div className='flex items-center gap-4 mt-2'>
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
                        <div className='w-1/2 h-full'>
                            <FeaturedImageCardSmaller datasmaller={sliders_smaller}/>
                            <div className='h-auto flex flex-col p-3 w-full bg-white rounded-b-xl'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-xl text-yellow-500 font-semibold mt-2'>2 Bedroom</h3>
                                    <p className='text-md text-gray-400 mt-2'>3891 Poplar Lane, Miami, FL</p>
                                    <div className='flex items-center gap-4 mt-2'>
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

                <div className='w-1/2 h-full flex flex-col gap-6'>
                    <div className='w-full h-full mt-4'>
                        <FeaturedImageCard data={sliders}/>
                        <div className='h-auto flex flex-col p-3 w-full bg-white rounded-b-xl'>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-xl text-yellow-500 font-semibold mt-2'>2 Bedroom</h3>
                                <p className='text-md text-gray-400 mt-2'>3891 Poplar Lane, Miami, FL</p>
                                <div className='flex items-center gap-4 mt-2'>
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

                    <div className='w-full h-full flex gap-4'>
                        <div className='w-1/2 h-full'>
                            <FeaturedImageCardSmaller datasmaller={sliders_smaller}/>
                            <div className='h-auto flex flex-col p-3 w-full bg-white rounded-b-xl'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-xl text-yellow-500 font-semibold mt-2'>2 Bedroom</h3>
                                    <p className='text-md text-gray-400 mt-2'>3891 Poplar Lane, Miami, FL</p>
                                    <div className='flex items-center gap-4 mt-2'>
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
                        <div className='w-1/2 h-full'>
                            <FeaturedImageCardSmaller datasmaller={sliders_smaller}/>
                            <div className='h-auto flex flex-col p-3 w-full bg-white rounded-b-xl'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-xl text-yellow-500 font-semibold mt-2'>2 Bedroom</h3>
                                    <p className='text-md text-gray-400 mt-2'>3891 Poplar Lane, Miami, FL</p>
                                    <div className='flex items-center gap-4 mt-2'>
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

            </div>
            <div className='flex items-center justify-center mt-6 mb-6'>
                <button className='bg-yellow-500 text-white pt-3 pb-3 pl-10 pr-10 rounded-md'>Book Now!</button>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties