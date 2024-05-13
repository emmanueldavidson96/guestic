"use client"
import { Inter, Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair",
});
const OpenSans = Open_Sans({ subsets: ["latin"], variable: "--open-sans" });

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

// export const metadata = {
//   title: "Home | Guestic",
//   description: "Developed by Onimisea | Bayo | Emmatech",
// };

export default function RootLayout({ children }) {
  const [popup, set_popup] = useState(false)
  const [registerpopup, setregister_popup] = useState(false)
  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen antialiased font-opensans ${popup || registerpopup? "overflow-hidden": ""}`,
          inter.variable,
          playfair.variable,
          OpenSans.variable
        )}
      >
        <Header popup={popup} set_popup={set_popup} registerpopup={registerpopup} setregister_popup={setregister_popup} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
