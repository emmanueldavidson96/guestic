"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { HiMiniChevronDown, HiOutlineArrowRight } from "react-icons/hi2";
import cities from "@/data/cities";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { toast } from "@/components/ui/use-toast";
import GuestCounter from "./GuestCounter";
import Link from "next/link";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const SearchFilter = () => {
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckoutDate] = useState();

  const form =
    useForm <
    z.infer <
    typeof FormSchema >>
      {
        resolver: zodResolver(FormSchema),
      };

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section className="w-full bg-white border-[1px] border-goldenrod py-2 px-4 rounded-[20px] text-opensans text-[#A59877] hidden md:flex md:items-center md:justify-center xl:justify-between gap-4 flex-wrap absolute bottom-[40px]">
      <Select>
        <SelectTrigger className="sm2:w-[45%] md:w-[25%] xl:w-fit outline-none border-none flex gap-2 items-center justify-center">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.id} value={city.city}>
              {city.city} ({city.code})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator
        orientation="vertical"
        className="w-[1px] h-[25px] bg-[#A59877]"
      />

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

      <Separator
        orientation="vertical"
        className="w-[1px] h-[25px] bg-[#A59877] hidden xl:flex"
      />

      <GuestCounter />

      <Link className="" href="/destinations">
        <Button className="rounded-[10px] bg-goldenrod border-2 border-goldenrod text-white font-bold hover:bg-white hover:text-goldenrod duration-300 w-full sm2:w-[45%] md:w-[30%] xl:w-fit">
          Search
        </Button>      
      </Link>
    </section>
  );
};

export default SearchFilter;
