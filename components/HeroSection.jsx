import React from "react";
import SearchFilter from "./SearchFilter";

const HeroSection = () => {
  return (
    <section className="relative">
      <section
        className="bg-hero-bg w-full bg-cover bg-center fixed top-0 left-0 h-screen z-0 min-h-screen bg-no-repeat bg-fixed"
        style={{ zIndex: -1 }}
      ></section>
      <section className="w-[85%] mx-auto py- flex flex-col items-center justify-center h-screen relative z-10">
        <section className="w-full flex flex-col items-center justify-between sm2:flex-row">
          <section className="sm2:w-[80%] md:w-[55%] md2:w-[40%] flex flex-col gap-6 text-brownish_black">
            <h1 className="text-2xl sm2:text-3xl md:text-4xl font-playfair">
              Hospitality and Coziness Like No One Else
            </h1>
            <p className="font-opensans text-justify">
              Lorem ipsum dolor sit amet consectetur. Eget sit arcu pellentesque
              adipiscing interdum. Iaculis at integer lorem nam morbi{" "}
            </p>
          </section>
          <section className="sm2:w-[20%] md:w-[35%] md2:w-[45%] flex flex-col gap-6">
            <h1></h1>
          </section>
        </section>

        <SearchFilter />
      </section>
    </section>
  );
};

export default HeroSection;
