"use client";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import useGuesticStore from "@/store";
import MainNav from "./MainNav";
import LangCurr from "./LangCurr";
import HeaderButtonGroup from "./HeaderButtonGroup";
import { RiCloseFill, RiMenu5Fill } from "react-icons/ri";

const Header = ({popup, set_popup, registerpopup,setregister_popup }) => {
  const { mobileMenuOpen, toggleMobileMenuOpen } = useGuesticStore((state) => ({
    mobileMenuOpen: state.mobileMenuOpen,
    toggleMobileMenuOpen: state.toggleMobileMenuOpen,
  }));

  return (
    <section className="w-full relative bg-white text-brownish_black h-[80px] flex items-center justify-center">
      <section className="w-[90%] mx-auto flex items-center justify-between">
        <Image src={logo} alt="Guestic" />

        <section className="flex items-center justify-center gap-6">
          <MainNav />
          <LangCurr />
          <HeaderButtonGroup popup={popup} set_popup={set_popup} registerpopup={registerpopup} setregister_popup={setregister_popup}/>

          {mobileMenuOpen ? (
            <RiCloseFill size={25} onClick={toggleMobileMenuOpen} className="md:hidden duration-300" />
          ) : (
            <RiMenu5Fill size={25} onClick={toggleMobileMenuOpen} className="md:hidden duration-300" />
          )}
        </section>
      </section>
    </section>
  );
};

export default Header;
