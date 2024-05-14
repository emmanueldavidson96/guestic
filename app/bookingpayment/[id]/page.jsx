"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BookedHouse from '@/public/images/blogImage1.png'
import { BsArrowRightShort } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import "react-phone-number-input/style.css"
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import Link from 'next/link';

export default function BookingPayment({params}) {
  const [value, setValue] = useState()
  const [confirmValue, setConfirmValue] = useState();
  const [listingInfo, setListingInfo] = useState({})
  useEffect(() => {
    if(params.id){
      const handleListingInfo = async () => {
        const res = await axios.get(`https://guestic.onrender.com/listings/${params.id}`)
        setListingInfo(res.data)
      }
      handleListingInfo()
    }
  }, [params.id])
  const tax_price = 12
  const new_user_fee = 33
  
  return (
    <section className='bg-[#F8F4EC] '>
      <section className='flex flex-row justify-between w-[90%] m-auto'>
        <section className='w-[60%] bg-[#fff] rounded-md shadow-md mt-10 p-10 h-fit'>
          <h1 className='text-xl font-bold'>Guest Information</h1>
          <p className='flex flex-row'>Already have an account? <span className='text-goldenrod flex pl-2 items-center'>Log in <BsArrowRightShort size={25} className='pt-1'/></span> or sign up with <span className='text-goldenrod flex pl-2 items-center'>Google account <BsArrowRightShort size={25} className='pt-1' /></span></p>
          <div className='flex flex-col pt-5'>
            <div className='flex flex-col mb-3'>
              <label className='mb-2'>Email Address</label>
              <input className='border border-gray-300 rounded-md w-full mr-3 p-3' placeholder='olu2kayo@guestic.com' />
            </div>
            <div className='flex flex-col mb-3'>
              <label className='mb-2'>Confirm email Address</label>
              <input className='border border-gray-300 rounded-md w-full p-3' placeholder='olu2kayo@guestic.com'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col mb-3'>
              <label className='mb-2'>First Name</label>
              <input className='border border-gray-300 rounded-md w-full p-3' placeholder='Olukoya'/>
            </div>
            <div className='flex flex-col mb-3'>
              <label className='mb-2'>Last name</label>
              <input className='border border-gray-300 rounded-md w-full p-3' placeholder='Kayode' />
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='mb-3'>
              <label className='mb-2'>Phone Number</label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  country="US"
                  className='border p-3 border-gray-300 rounded-md w-full outline-none focus:outline-none focus:border-none'
                />
                {/* <select
                  className="px-4 py-2 border border-l-0 border-gray-300 rounded-r-md appearance-none focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select> */}
            </div>
            <div className='flex flex-col mb-3'>
              <label className=''>Alternative phone number</label>
              <PhoneInput
                  placeholder="Enter phone number"
                  country="US"
                  value={confirmValue}
                  onChange={setConfirmValue}
                  className='border p-3 border-gray-300 rounded-md w-full outline-none focus:outline-none focus:border-none'
              />
            </div>
          </div>
          <div className='flex flex-col mb-3'>
            <label className='mb-2'>Birthdate</label>
            <input className='border border-gray-300 rounded-md w-full p-3' placeholder='DD/MM/YY'/>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col mb-3'>
              <label className='mb-2'>Password</label>
              <input className='border border-gray-300 rounded-md w-full p-3 mr-3' placeholder='**************' type='password'/>
            </div>
            <div className='flex flex-col mb-3'>
              <label className='mb-2'>Confirm password</label>
              <input className='border border-gray-300 rounded-md w-full p-3' placeholder='*************' type='password' />
            </div>
          </div>
          <section className='w-full bg-[#fff] rounded-md shadow-md pt-10 h-fit'>
            <h1 className='text-lg font-bold p-3'>Payment</h1>
            <div className='pt-10'>
              <div className='flex flex-col mb-3 '>
                <label className='mb-2'>Card number</label>
                <input className='border border-gray-300 rounded-md p-3' placeholder='1234 1234 1234 1234 ' />
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-col mb-3'>
                <label className='mb-2'>Expiration</label>
                <input className='border border-gray-300 rounded-md w-full p-3' placeholder='MM/YY'/>
              </div>
              <div className='flex flex-col mb-3'>
                <label className='mb-2'>CVC</label>
                <input className='border border-gray-300 rounded-md w-full p-3 ' placeholder='3 digits at the card back' />
              </div>
            </div>
            <div className='flex flex-col'>
              <div  className='flex flex-col mb-3'>
                <label className='mb-2'>Country</label>
                  <input
                    type="text"
                    placeholder='USA'
                    className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 p-3 "
                  />
                  {/* <select
                    className="px-4 py-2 border border-l-0 border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select> */}
              </div>
            </div>
            <div className='flex mb-5 flex-col'>
              <div className='flex flex-col mb-3'>
                <label className='mb-2'>First name</label>
                <input className='border border-gray-300 rounded-md w-full p-3' placeholder='Kayode'/>
              </div>
              <div className='flex flex-col mb-3'>
                <label className='mb-2'>Last name</label>
                <input className='border border-gray-300 rounded-md w-full p-3 ' placeholder='Olukoya'/>
              </div>
            </div>
          </section>
          <p className='ml-10'> By selecting to complete this booking i agree to the <span className='text-goldenrod'>Terms of service</span> and <span className='text-goldenrod'>Privacy Policy</span></p>
          <Link href={`/bookingsuccess/${params.id}`}>
            <button className='bg-goldenrod text-white w-full rounded-md p-3'>Complete Booking</button>
          </Link>
        </section>

        <section className='bg-[#fff] w-[30%] rounded-md shadow-md m-10 h-fit' >
          <Image src={BookedHouse} alt='apartment' className='w-full'/>
          <div className='p-5 flex flex-col gap-3'>
            <p>{listingInfo?.bedroomsNumber} Bedrooms</p>
            <p>{listingInfo?.name}</p>
            <p className='text-sm font-bold'>{listingInfo?.address}, {listingInfo?.city}, {listingInfo?.country}</p>
            <p className='text-goldenrod text-sm'>Tuesday, March 05 - Thursday, March 07 (2 Nights)</p>
            <hr />
            <div className='w-full h-fit flex flex-col gap-2'>
              <div className='flex justify-between '>
                <p>US${listingInfo?.price}</p>
                <p>US${listingInfo?.price}</p>
              </div>
              <div className='flex justify-between'>
                <p>5% off - new user</p>
                <p>-US${new_user_fee}</p>
              </div>
              <div className='flex justify-between'>
                <p>Tax</p>
                <p>US${tax_price}</p>
              </div>

              <div className='flex justify-between'>
                <p className='font-bold text-lg'>Total</p>
                <p className='font-bold text-lg'>US${listingInfo?.price - new_user_fee - tax_price}</p>
              </div>
              
            </div>
          </div>
        </section>
      </section>
       
    </section>
  )
}
