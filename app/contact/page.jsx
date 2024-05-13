"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contacts({placeholderText}) {

  const [searchTerm, setSearchTerm ] = useState('')

  const handleCopyClick = () => {
    navigator.clipboard.writeText(placeholderText)
    alert('copied to clipboard')
  }

  return (
    <section className=''>
      <section>
        <div>
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed iste tempore deleniti necessitatibus, itaque sequi. Assumenda, sequi eius? Eligendi, sed? Ullam aliquam, assumenda totam culpa amet qui earum voluptas?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, consequuntur officiis. Reiciendis natus dolorem voluptas, deleniti eveniet ducimus minima sed?</p>
        </div>
        <Image src="" alt="guestic_contact"/>
      </section>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati provident quisquam possimus minus velit est, voluptates dolorum accusamus praesentium! Ut.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at.</p>

      <section>
        <h2>Social Media</h2>
        <div className='flex flex-row'>
          <li className="text-md pb-2 font-semibold flex gap-1"><FaInstagram className="pt-1" size={25}/> Instagram</li>
          <div className="flex items-center space-x-2">
            <input className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 flex-1" type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={placeholderText} />
            <button onClick={handleCopyClick} className="bg-blue-500 text-white px-3 py-2 rounded-lg focus:outline-none hover:bg-blue-600"></button>
          </div>
        </div>
        <div className='flex flex-row'>
          <li className="text-md pb-2 font-semibold flex gap-1"><FaXTwitter  className="pt-1" size={25}/> Twitter</li>
          <div className="flex items-center space-x-2">
            <input className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 flex-1" type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={placeholderText} />
            <button onClick={handleCopyClick} className="bg-blue-500 text-white px-3 py-2 rounded-lg focus:outline-none hover:bg-blue-600"></button>
          </div>
        </div>
        <div className='flex flex-row'>
          <li className="text-md pb-2 font-semibold flex gap-1"><FaFacebookF className="pt-1" size={25}/> Facebook</li>
          <div className="flex items-center space-x-2">
            <input className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 flex-1" type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={placeholderText} />
            <button onClick={handleCopyClick} className="bg-blue-500 text-white px-3 py-2 rounded-lg focus:outline-none hover:bg-blue-600"></button>
          </div>
        </div>
        <div className='flex flex-row'>
          <li className="text-md pb-2 font-semibold flex gap-1"><FaLinkedinIn className="pt-1" size={25}/> LinkedIn</li>
          <div className="flex items-center space-x-2">
            <input className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 flex-1" type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={placeholderText} />
            <button onClick={handleCopyClick} className="bg-blue-500 text-white px-3 py-2 rounded-lg focus:outline-none hover:bg-blue-600"></button>
          </div>
        </div>
      </section>
      <section>
        <h2>Office Address</h2>
        <div className='flex flex-row border-b border-gray-400'>
          <label>Guestic Apartments</label>
          <select name='apartments'>
            <option>Canada</option>
            <option>USA</option>
            <option>England</option>
            <option>Ireland</option>
          </select>
        </div>
        <p>3189 Poplar lane</p>
        <p>Maimi Florida</p>
        <p>United States</p>
        <p>+1(100)215 546</p>
      </section>
      <section>
        <h2>Live Chat</h2>
        <textarea className='rounded-md' rows={30} cols={50} placeholder='Enter your message here'></textarea>
        <button>Send Message</button>
      </section>

    </section>
  )
}
