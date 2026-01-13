"use client";
import Image from "next/image"
import { useState, useContext } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    
    return (
        <header className="fixed top-0 left-0 w-full bg-[var(--grey)] font-bold text-2xl shadow shadow-xl z-200">
            {/* <div className="absolute w-full h-[20vh] translate-y-[72px] z-100 bg-gradient-to-b from-black/70 to-transparent" /> */}
            <div className="flex flex-row justify-around md:px-8 lg:px-12 xl:px-20 py-5 min-h-[72px]">
                <div className="flex-1 max-w-[500px] hidden md:flex flex-row justify-start gap-6 md:gap-14 lg:gap-27 xl:gap-50">
                    <a 
                        href="/"
                        
                    >
                        Home
                    </a> 
                    <a href="/">Events</a>
                </div>
                {
                    !open &&
                    (
                        <div className="drop-shadow-xl/25 absolute top-0 left-[50%] -translate-x-1/2  justify-center w-[160px] h-[130px] md:w-[250px] md:h-[203px] lg:w-[250px] lg:h-[203px] z-100"> 
                            <Image src="/icons/LOGO.png" alt="logo" fill/>
                        </div>
                    )
                }
                

                <div className="flex-1 max-w-[500px] hidden md:flex flex-row justify-end gap-6 md:gap-14 lg:gap-27 xl:gap-50">
                    <a href="/games" className="">Games</a> 
                    <a href="/">Resources</a> 
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
                            <button 
                                onClick={() => {
                                    const section = document.getElementById("about");
                                    if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                    }
                                    setOpen(false)
                                }}
                            >
                                About Us
                            </button> 
                            <a href="/" onClick={() => setOpen(false)}>Events</a>
                            <a href="/" onClick={() => setOpen(false)}>Games</a> 
                            <a href="/" onClick={() => setOpen(false)}>Resources</a> 
                        </div>
                    )
                }
                
                
            </div>
            
            
        </header>
    );
}