import Image from "next/image";

export default function Three(){
    return(
        <div className="
            relative
            w-full
            bg-[url('/BG/WhatAreWeBG.png')]
            bg-no-repeat
            bg-cover
            bg-top
            py-[clamp(6rem,10vh,12rem)]
        ">
            
    
            <div className="flex flex-col items-center mb-20 md:mb-40 px-4 z-10 max-w-[1100px] mx-auto">
                <div className="mb-5 flex items-center justify-center whitespace-nowrap max-w-[100vw]">
                    <span className="font-mono text-[clamp(4rem,8vw,6rem)] opacity-40">
                        [
                    </span>

                    <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] translate-y-1 mx-2 text-center">
                        What are we?
                    </h2>

                    <span className="font-mono text-[clamp(4rem,8vw,6rem)] opacity-40">
                        ]
                    </span>
                </div>

                <p className="text-[clamp(1rem,1.2vw,1.25rem)] max-w-[90vw] md:max-w-[60vw] text-center leading-relaxed">
                    Founded in 2018, the University of Auckland Game Developer Guild is an inclusive university club dedicated to teaching students and hobbyists the core aspects of game development.
                    <br className="mb-8"/>
                    We offer tutorials throughout the semester where you learn each of the core aspects of game development (I.e. art, code, game design) as well as our semester long hackathon/game jam called GDG Jam where we put those skills to the test.
                </p>
            </div>

      
            <div className="flex flex-col items-center mb-20 md:mb-40 px-4 z-10 max-w-[1100px] mx-auto">
                <div className="mb-5 flex items-center justify-center whitespace-nowrap max-w-[100vw]">
                    <span className="font-mono text-[clamp(4rem,8vw,6rem)] opacity-40">
                        [
                    </span>

                    <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] translate-y-1 mx-2 text-center">
                        Dream,
                        Learn,
                        <br className="block sm:hidden" />
                        Create
                    </h2>

                    <span className="font-mono text-[clamp(4rem,8vw,6rem)] opacity-40">
                        ]
                    </span>
                </div>

                <p className="text-[clamp(1rem,1.2vw,1.25rem)] max-w-[90vw] md:max-w-[60vw] text-center leading-relaxed">
                    Those three words make up our philosophy. Our philosophy is to Dream, to Learn, to Create. This means that we provide our members the opportunity to pursue their ideas or learn new skills along the way. It’s all about the journey, not the destination for us.
                    <br className="mb-8"/>
                    Whether it is crafting art, brewing code, or steaming some sick beats and boiling some cool designs, we welcome them all to make a jam of a time.
                </p>
            </div>

           
            <div className="flex flex-col items-center mb-20 md:mb-40 px-4 z-10 max-w-[1100px] mx-auto">
                <div className="mb-5 flex items-center justify-center whitespace-nowrap max-w-[100vw]">
                    <span className="font-mono text-[clamp(4rem,8vw,6rem)] opacity-40">
                        [
                    </span>

                    <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] translate-y-1 mx-2 text-center">
                        Meet,
                        Share,
                        <br className="block sm:hidden" />
                        Play
                    </h2>

                    <span className="font-mono text-[clamp(4rem,8vw,6rem)] opacity-40">
                        ]
                    </span>
                </div>

                <p className="text-[clamp(1rem,1.2vw,1.25rem)] max-w-[90vw] md:max-w-[60vw] text-center leading-relaxed">
                    Gamedev is a team effort, so you can’t embark on this adventure alone. Many of our events encourage joining teams and socialising, but we don’t enforce it. We aim to be a very safe and inclusive space. Even if you’re the world’s introvert, you’re in gamedev -- everyone’s just as shy! The most fun in this club is playing each other's games, whether it's during our small showcase nights, or during a grand expo event outside of the university.
                </p>
            </div>

           
            <h3 className="text-center text-[clamp(1.3rem,2vw,2rem)] font-KD mb-10 z-10">
                So join us already! And then,
                <br className="mb-2"/>
                <b>Game Devs Unite!</b>
            </h3>

        </div>
    )
}