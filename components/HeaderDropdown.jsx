import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiMiniChevronDown } from "react-icons/hi2";

import React from "react";
import Link from "next/link";
const HeaderDropdown = () => {
  return (
    <section className="">
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:text-goldenrod flex items-center justify-center px-2 py-1 text-sm border-none outline-none">
          More <HiMiniChevronDown className="ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/blog">
              Blog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">
              About
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">
              Contact
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default HeaderDropdown;
