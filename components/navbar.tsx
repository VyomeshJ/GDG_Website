"use client";
import Image from "next/image"
import Link from "next/link";
import { useState, useContext } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    
    return (
        <header className="fixed top-0 left-0 w-full bg-[var(--grey)] font-bold text-2xl shadow shadow-xl z-200">
            {/* <div className="absolute w-full h-[20vh] translate-y-[72px] z-100 bg-gradient-to-b from-black/70 to-transparent" /> */}
            <div className="flex flex-row justify-around md:px-8 lg:px-12 xl:px-20 py-5 min-h-[72px]">
                <div className="flex-1 max-w-[500px] hidden md:flex flex-row justify-start gap-6 md:gap-14 lg:gap-27 xl:gap-50">
                    <Link 
                        href="/"
                    
                    >
                        <span className="text-white hover:text-[#00c8b0]">
                            Home
                        </span>
                    </Link> 
                    <Link href="/events">
                        <span className="text-white hover:text-[#00c8b0]">
                                Events
                        </span>
                    </Link>
                </div>
                {
                    !open &&
                    (
                        <div className="drop-shadow-xl/25 absolute top-0 left-[50%] -translate-x-1/2  justify-center w-[160px] h-[130px] md:w-[250px] md:h-[203px] lg:w-[250px] lg:h-[203px] z-100"> 
                            <Link href="/">
                                <Image src="/icons/LOGO.png" alt="logo" fill/>
                            </Link>
                        </div>
                    )
                }
                

                <div className="flex-1 max-w-[500px] hidden md:flex flex-row justify-end gap-6 md:gap-14 lg:gap-27 xl:gap-50">
                    <Link href="/games" className="">
                        <span className="text-white hover:text-[#00c8b0]">
                                Games
                        </span>
                    </Link> 
                    <Link href="/">
                        <span className="text-white hover:text-[#00c8b0]">
                            Resources
                        </span>
                    </Link> 
                </div>
                <button className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-101" onClick={() => setOpen(!open)}>
                    <div className="space-y-1">
                        <span className="block h-1 w-8 bg-white"></span>
                        <span className="block h-1 w-8 bg-white"></span>
                        <span className="block h-1 w-8 bg-white"></span>
                    </div>
                </button>
                {
                    open &&
                    (
                        <div className="md:hidden flex flex-col gap-5 items-center  bg-[var(--grey)] w-full z-100">
                            
                            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link href="/events" onClick={() => setOpen(false)}>Events</Link>
                            <Link href="/games" onClick={() => setOpen(false)}>Games</Link> 
                            <Link href="/" onClick={() => setOpen(false)}>Resources</Link> 
                        </div>
                    )
                }
                
                
            </div>
            
            
        </header>
    );
}