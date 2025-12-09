import Image from "next/image";

export default function Three(){
    return(
        <div className="relative w-full bg-cover bg-top bg-no-repeat pt-20 min-h-[180vh] md:min-h-[180vh] lg:min-h-[180vh] flex flex-col"
        style={{ backgroundImage: "url('/BG/WhatAreWeBG.png')" }}
        >
            
            <div className="flex justify-center flex-col items-center mb-20 md:mb-40 px-4">
                <div className="mb-5">
                    <span className="font-mono text-8xl opacity-40">[</span>
                    <h2 className="font-bold text-3xl md:text-5xl inline-block -translate-y-4 max-w-[70vw] text-center ">What are we?</h2>
                    <span className="font-mono text-8xl opacity-40">]</span>
                </div>
                <p className="text-xl max-w-[90vw] md:max-w-[60vw] text-center">
                    <b>GDG</b> (Game Developer Guild) is a University of Auckland club dedicated to all things gamedev. We host weekly meetups 
                </p>
            </div>
            <div className="flex justify-center flex-col items-center mb-20 md:mb-40 px-4">
                <div className="mb-5">
                    <span className="font-mono text-8xl opacity-40">[</span>
                    <h2 className="font-bold text-3xl md:text-5xl inline-block -translate-y-4 max-w-[70vw] text-center ">Dream, Learn, Create</h2>
                    <span className="font-mono text-8xl opacity-40">]</span>
                </div>
                <p className="text-xl max-w-[90vw] md:max-w-[60vw] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
            </div>

            <div className="flex justify-center flex-col items-center mb-20 md:mb-40 px-4">
                <div className="mb-5">
                    <span className="font-mono text-8xl opacity-40">[</span>
                    <h2 className="font-bold text-3xl md:text-5xl inline-block -translate-y-4 max-w-[70vw] text-center ">Meet, Share, Play</h2>
                    <span className="font-mono text-8xl opacity-40">]</span>
                </div>
                <p className="text-xl max-w-[90vw] md:max-w-[60vw] text-center">
                    Gamedev is a team effort, so you can’t embark on this adventure alone. Many of our events encourage joining teams and socialising, but we don’t enforce it. We aim to be a very safe and inclusive space. Even if you’re the world’s introvert, you’re in gamedev -- everyone’s just as shy!
                    <br className="mb-8"/>
                    The most fun in this club is playing each other games, whether its during our small showcase nights, or during a grand expo event outside of the university. 
                </p>
            </div>


            <h3 className="text-center text-2xl font-KD mt-auto mb-70">
                So join us already! And then,
                <br className="mb-2"/>
                <b>Game Devs Unite!</b>

            </h3>
        </div>
    )
}