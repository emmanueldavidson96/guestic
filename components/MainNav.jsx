import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import React from "react";
import HeaderDropdown from "./HeaderDropdown";

const MainNav = () => {
  return (
    <section className="hidden md:flex">
      <Link href="/" className="">
        <p className="hover:text-goldenrod flex items-center justify-center px-2 py-1 text-sm">
          Home
        </p>
      </Link>
      <Link href="/customersreview" className="">        
        <p className="hover:text-goldenrod flex items-center justify-center px-2 py-1 text-sm">
          Reviews
        </p>
      </Link>
      <HeaderDropdown />
    </section>
  );
};

export default MainNav;
