"use client";

import HeroSection from "@/components/HeroSection";
import useGuesticStore from "@/store";
import BlogSection from "@/components/BlogSection";
import Reviews from "@/components/Reviews";
import Property from "@/components/Property";
import FeaturedProperties from "@/components/FeaturedProperties";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Explore from "@/components/Explore";
import { useEffect, useState } from "react";
import Featured from "@/components/Featured";


export default function Home() {
  const { toggleMobileMenuOpen } = useGuesticStore((state) => ({
    toggleMobileMenuOpen: state.toggleMobileMenuOpen,
  }));
  

  return (
    <main className="relative">
      <HeroSection />
      <section className="w-full bg-[#F2ECD9]">
        <Property />
      </section>
      <section className="w-full">
        <Featured/>
      </section>
      <section className="w-full bg-[#ffffff]">
        <Reviews />
      </section>
      <section className="w-full bg-[#ffffff]">
        <Explore />
      </section>
      <section className="w-full">
        <FrequentlyAskedQuestions />
      </section>
      <section className="w-full bg-[#EEEEFC]">
        <BlogSection />
      </section>
      {/* <section className="w-[85%] mx-auto py-6 flex flex-col items-center justify-center bg-slate-200">
        </section> */}
    </main>
  );
}
