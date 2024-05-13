"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import feature_image from "../../public/travel_blog_images/1678741025165.png";
import { FaArrowRight } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoGiftOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";

function Profile() {
  const [my_profile, set_my_profile] = useState(true);
  const handle_my_profile = () => {
    set_my_profile(true)
    set_special_offers(false)
    set_notification(false)
  }

  const [special_offers, set_special_offers] = useState(false);
  const handle_special_offers = () => {
    set_special_offers(true)
    set_my_profile(false)
    set_notification(false)
  }

  const [notification, set_notification] = useState(false);
  const handle_notification = () => {
    set_notification(true)
    set_special_offers(false)
    set_my_profile(false)
  }

  return (
    <main className="relative">
        <section className='w-full h-fit flex-col flex  pt-6 pb-6 bg-orange-100 '>
            <div className='w-[90%] m-auto max-h-[150px] overflow-hidden rounded-3xl'>
              <Image src={feature_image} className='w-full h-full ' alt=''/>              
            </div>            
            <div className='w-fit h-fit flex gap-4'>
              <Image src={feature_image} className='w-[150px] h-[150px] rounded-full ml-40 mt-[-40px] border-4' alt=''/>
              <div className='flex flex-col gap-1 pt-4'>
                <h2 className='text-2xl font-bold'>Kayode Olotu</h2>
                <p>olo2kayu@gmail.com</p>
              </div>
            </div>
            <div className='w-[90%] h-fit flex m-auto mt-10 justify-between'>
              <div className='w-[25%] h-fit bg-white pt-8 pb-8 pl-8 pr-8 rounded-3xl flex flex-col gap-4'>
                <div className='flex w-full items-center p-3 justify-between cursor-pointer' onClick={handle_my_profile}>
                  <h3 className='text-lg font-semibold'>My profile</h3>
                  <FaArrowRight />
                </div>

                <hr className='w-full border-gray-600 h-[2px]' />

                <div className='flex w-full items-center p-3 justify-between cursor-pointer'>
                  <h3 className='text-lg font-semibold'>Messages</h3>
                  <FaArrowRight />
                </div>

                <hr className='w-full border-gray-600 h-[2px]' />

                <div className='flex w-full items-center p-3 justify-between cursor-pointer'  onClick={handle_notification}>
                  <h3 className='text-lg font-semibold'>Notifications</h3>
                  <FaArrowRight />
                </div>

                <hr className='w-full border-gray-600 h-[2px]' />

                <div className='flex w-full items-center p-3 justify-between cursor-pointer'>
                  <h3 className='text-lg font-semibold' onClick={handle_special_offers}>Special Offers</h3>
                  <FaArrowRight />
                </div>

                <hr className='w-full border-gray-600 h-[2px]' />

                <div className='flex w-full items-center p-3 justify-between cursor-pointer'>
                  <h3 className='text-lg font-semibold'>Rewards & Discounts</h3>
                  <FaArrowRight />
                </div>
                
                <hr className='w-full border-gray-600 h-[2px]' />

                <div className='flex w-full items-center p-3 justify-between cursor-pointer'>
                  <h3 className='text-lg font-semibold'>Booking History</h3>
                  <FaArrowRight />
                </div>
                
                <hr className='w-full border-gray-600 h-[2px]' />

                <div className='flex w-full items-center p-3 justify-between cursor-pointer'>
                  <h3 className='text-lg font-semibold'>Help Center</h3>
                  <FaArrowRight />
                </div>
                
                <hr className='w-full border-gray-600 h-[2px]' />

                <div className='flex w-full items-center p-3 justify-between cursor-pointer mt-20'>
                  <h3 className='text-lg font-semibold'>Settings</h3>
                  <FaArrowRight />
                </div>

                <hr className='w-full border-gray-600 h-[2px]' />

                <div className='flex w-full items-center p-3 justify-between cursor-pointer'>
                  <h3 className='text-lg font-semibold'>Log Out</h3>
                  <CiLogout color='red' size={25} />
                </div>

              </div>

              {
                my_profile && 
                <div className='w-[70%] h-fit bg-white pt-8 pb-8 pl-8 pr-8 rounded-3xl flex flex-col gap-4'>
                  <div className='w-fit h-fit flex items-center gap-4'>
                    <CgProfile size={25}/>
                    <h3 className='text-2xl font-semibold'>My Profile</h3>
                  </div>

                  <div className='w-full p-4 border-2 rounded-lg'>
                    <p className='font-light text-sm'>Email</p>
                    <h3 className='font-semibold'>olo2kayu@gmail.com</h3>
                  </div>

                  <div className='w-full p-4 border-2 rounded-lg'>
                    <p className='font-light text-sm'>Password</p>
                    <h3 className='font-semibold'>******************</h3>
                  </div>

                  <div className='w-full p-4 border-2 rounded-lg'>
                    <p className='font-light text-sm'>Address</p>
                    <h3 className='font-semibold'>309A Guestic royal lane, Canada.</h3>
                  </div>

                  <div className='w-full p-4 border-2 rounded-lg'>
                    <p className='font-light text-sm'>Telephone</p>
                    <h3 className='font-semibold'>+1 309 455 001</h3>
                  </div>

                  <div className='w-full p-4 border-2 rounded-lg'>
                    <p className='font-light text-sm'>Membership</p>
                    <h3 className='font-semibold'>Bronze</h3>
                    <h3 className='font-semibold'>Level 1: Copper</h3>
                    
                    <div>

                    </div>

                  </div>


                </div>

              }

              {
                special_offers &&
                <div className='w-[70%] h-fit bg-white pt-8 pb-8 pl-8 pr-8 rounded-3xl flex flex-col gap-4'>
                  <div className='w-fit h-fit flex items-center gap-4'>
                    <IoGiftOutline size={25}/>
                    <h3 className='text-2xl font-semibold'>Special Offers (4)</h3>
                  </div>
                  <div className='flex w-full h-fit justify-between'>
                    <div className='bg-orange-100 flex flex-col w-[48%] rounded-2xl p-8 gap-2'>
                      <div className='flex gap-4'>
                        <Image src={feature_image} className='w-[120px] h-[150px] rounded-lg' alt=''/>
                        <div className='flex flex-col gap-2'>
                          <h3 className='text-2xl font-bold'>1 bedroom</h3>
                          <p className='text-xl'>Kings Royal Court</p>
                          <p className='text-xl'>123 Royalty lane, Miami, FL</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Vitae quis suscipit eu dolor molestie egestas commodo ipsum eu. 
                        Vitae tortor congue aliquam ultricies in elit molestie.
                      </p>
                      <div className='w-full h-[60px] overflow-hidden flex rounded-lg'>
                        <input placeholder='Guestic10' className='w-[70%] h-full p-3' />
                        <button className='bg-yellow-600 w-[30%] h-full text-white'>Apply</button>
                      </div>
                    </div>
                    
                    <div className='bg-orange-100 flex flex-col w-[48%] rounded-2xl p-8 gap-2'>
                      <div className='flex gap-4'>
                        <Image src={feature_image} className='w-[120px] h-[150px] rounded-lg' alt=''/>
                        <div className='flex flex-col gap-2'>
                          <h3 className='text-2xl font-bold'>2 bedroom</h3>
                          <p className='text-xl'>Kings Royal Court</p>
                          <p className='text-xl'>123 Royalty lane, Miami, FL</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Vitae quis suscipit eu dolor molestie egestas commodo ipsum eu. 
                        Vitae tortor congue aliquam ultricies in elit molestie.
                      </p>
                      <div className='w-full h-[60px] overflow-hidden flex rounded-lg'>
                        <input placeholder='Guestic10' className='w-[70%] h-full p-3' />
                        <button className='bg-yellow-600 w-[30%] h-full text-white'>Apply</button>
                      </div>
                    </div>

                  </div>
                  <div className='flex w-full h-fit justify-between'>
                    <div className='bg-orange-100 flex flex-col w-[48%] rounded-2xl p-8 gap-2'>
                      <div className='flex gap-4'>
                        <Image src={feature_image} className='w-[120px] h-[150px] rounded-lg' alt=''/>
                        <div className='flex flex-col gap-2'>
                          <h3 className='text-2xl font-bold'>2 bedroom</h3>
                          <p className='text-xl'>Kings Royal Court</p>
                          <p className='text-xl'>123 Royalty lane, Miami, FL</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Vitae quis suscipit eu dolor molestie egestas commodo ipsum eu. 
                        Vitae tortor congue aliquam ultricies in elit molestie.
                      </p>
                      <div className='w-full h-[60px] overflow-hidden flex rounded-lg'>
                        <input placeholder='Guestic10' className='w-[70%] h-full p-3' />
                        <button className='bg-yellow-600 w-[30%] h-full text-white'>Apply</button>
                      </div>
                    </div>
                    
                    <div className='bg-orange-100 flex flex-col w-[48%] rounded-2xl p-8 gap-2'>
                      <div className='flex gap-4'>
                        <Image src={feature_image} className='w-[120px] h-[150px] rounded-lg' alt=''/>
                        <div className='flex flex-col gap-2'>
                          <h3 className='text-2xl font-bold'>1 bedroom</h3>
                          <p className='text-xl'>Kings Royal Court</p>
                          <p className='text-xl'>123 Royalty lane, Miami, FL</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Vitae quis suscipit eu dolor molestie egestas commodo ipsum eu. 
                        Vitae tortor congue aliquam ultricies in elit molestie.
                      </p>
                      <div className='w-full h-[60px] overflow-hidden flex rounded-lg'>
                        <input placeholder='Guestic10' className='w-[70%] h-full p-3' />
                        <button className='bg-yellow-600 w-[30%] h-full text-white'>Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              }

              {
                notification && 
                <div className='w-[70%] h-fit bg-white pt-8 pb-8 pl-8 pr-8 rounded-3xl flex flex-col gap-4'>
                  <div className='w-fit h-fit flex items-center gap-4'>
                    <MdNotificationsNone size={25}/>
                    <h3 className='text-2xl font-semibold'>Notifications (1)</h3>
                  </div>
                  <p>You have received a new offer</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Cras orci nulla turpis scelerisque faucibus neque netus ultricies. 
                    Egestas sapien dolor egestas ipsum sit varius purus mi amet. 
                    Vitae erat velit sed purus eu. 
                  </p>
                  <div className='flex w-[360px] h-fit p-5 border-2 rounded-lg gap-4'>
                    <Image src={feature_image} className='w-[80px] h-[80px] rounded-md' alt=''/>
                    <div className='flex gap-2 flex-col '>
                      <p className='font-light text-sm'>2 Bedroom Kings Court</p>
                      <button className='border-yellow-500 border-2 p-2 rounded-2xl w-[120px] text-yellow-500'>Book Now!</button>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Cras orci nulla turpis scelerisque faucibus neque netus ultricies. 
                    Egestas sapien dolor egestas ipsum sit varius purus mi amet. 
                    Vitae erat velit sed purus eu. 
                  </p>
                  <div className='flex w-[400px] h-fit p-5 border-2 rounded-lg gap-4'>
                    <Image src={feature_image} className='w-[80px] h-[80px] rounded-md' alt=''/>
                    <div className='flex gap-2 flex-col '>
                      <p className='font-light text-sm'>Best Vacation Places in Miami with Eatery</p>
                      <button className='border-yellow-500 border-2 p-2 rounded-2xl w-[120px] text-yellow-500'>Go to Blog!</button>
                    </div>
                  </div>
                </div>
              }


            </div>
        </section>

    </main>
  )
}

export default Profile