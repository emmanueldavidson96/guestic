import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import FooterLogo from "@/public/footerLogo.png"
import Image from "next/image"


const Footer = () => {
  return (
    <section className="bg-grayish_brown" >
      <section className="w-[90%] m-auto bg-grayish_brown text-white pt-12 pb-12 flex items-center justify-between">
        <div className="p-5">
          <ul className="flex flex-col gap-3">
            <p className="font-bold text-2xl pb-4">Navigations</p>
            <a href="#"><li className="text-md pb-2 font-light">Home</li></a>
            <a href="#"><li className="text-md pb-2 font-light">Rooms</li></a>
            <a href="#"><li className="text-md pb-2 font-light">Amenities</li></a>
            <a href="#"><li className="text-md pb-2 font-light">Location</li></a>
            <a href="#"><li className="text-md pb-2 font-light">Contact Us</li></a>
          </ul>
        </div>
        <div className="p-5">
          <ul className="flex flex-col gap-3">
            <p className="font-bold text-2xl pb-4">Quick Links</p>
            <a href="#"><li className="text-md pb-2 font-light">Privacy Policy</li></a>
            <a href="#"><li className="text-md pb-2 font-light">Terms of service</li></a>
            <a href="#"><li className="text-md pb-2 font-light">Reservations</li></a>
            <a href="#"><li className="text-md pb-2 font-light">Cancel Policy</li></a>
            <a href="#"><li className="text-md pb-2 font-light">FAQ</li></a>
          </ul>
        </div>
        <div className="p-5 mb-7">
          <ul className="flex flex-col gap-3">
            <p className="font-bold text-2xl pb-4">Contact Us</p>
            <a href="#"><li className="text-md pb-2 font-light flex gap-1"><CiLocationOn className="pt-1" size={25}/>3189 Maimi Florida, USA</li></a>
            <a href="#"><li className="text-md pb-2 font-light flex gap-1"><FaPhone className="pt-1" size={25}/>+1(100)215546</li></a>
            <a href="#"><li className="text-md pb-2 font-light flex gap-1"><MdOutlineEmail className="pt-1" size={25}/> contactus@guestic.ca</li></a>
            <a href="#"><li className="text-md pb-2 font-light flex gap-1"><RiCustomerServiceLine className="pt-1" size={25} />Customer care</li></a>
          </ul>
        </div>
        <div className="p-5 mb-7">
          <ul className="flex flex-col gap-3">
            <p className="font-bold text-2xl pb-4">Social Media</p>
            <a href="#"><li className="text-md pb-2 font-light flex gap-1"><FaInstagram className="pt-1" size={25}/> Instagram</li></a>
            <a href="#"><li className="text-md pb-2 font-light flex gap-1"><FaXTwitter className="pt-1" size={25} />Twitter</li></a>
            <a href="#"><li className="text-md pb-2 font-light flex gap-1"><FaFacebookF className="pt-1" size={25}/>Facebook</li></a>
            <a href="#"><li className="text-md pb-2 font-light flex gap-1"><FaLinkedinIn className="pt-1" size={25}/>LinkedIn</li></a>
          </ul>
        </div>
        <div className="p-5 mb-7 flex flex-col gap-4">
          <Image className="pb-5" src={FooterLogo} alt="guestic_footer"/>
          <p className="pb-2 font-light text-medium_gray">Hospitality and Coziness like no one else</p>
          <p className="pb-5 font-light">Newsletters</p>
          <p className="font-light">Get news, discount and reminder from us</p>
          <div className="relative flex items-center">
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-transparent" placeholder="Enter your email address"/>
            <button type="button" className="font-semibold absolute inset-y-0 right-0 px-4 py-2 bg-[#FFFFFF] text-[#000] rounded-r-md hover:bg-orange-400">Subscribe</button>
          </div>
        </div>
      {/* <p className="border-t border-gray-300 mt-8 text-center py-4">&copy; copyright 2024</p> */}
      </section>
    </section>
  );
};

export default Footer;
