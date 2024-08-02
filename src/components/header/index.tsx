"use client"


import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";



export function Header(){
   

   
    return(
        <header className={` bg-transparent fixed w-full h-11  z-50 } `}>
        <nav className=" flex w-full max-w-7xl mx-auto gap-3 h-11 py-6">
         <Link className="ml-4" href="http://facebook.com">
         <FaFacebook size={26} color="#fff"/>
         </Link>
         <Link href="http://instagram.com">
         <FaInstagram size={26} color="#fff"/>
         </Link>
         <Link href="http://x.com">
         <BsTwitterX size={26} color="#fff"/>
         </Link>
        </nav>
      </header>
    )
}