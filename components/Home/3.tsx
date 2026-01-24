import Image from "next/image";

export default function Three(){
    return(
        <div className="relative w-full min-h-screen flex flex-col pt-20 mb-20">
            <Image
                src="/BG/WhatAreWeBG.png"
                alt=""
                fill
                priority
                sizes="100vw"
                unoptimized
                quality={95}
                className="object-cover object-top will-change-transform"
            />
            
            
            <div className="flex justify-center flex-col items-center mb-20 md:mb-40 px-4 z-10">
                <div className="mb-5 flex items-center justify-center whitespace-nowrap max-w-[100vw]">
                    <span className="font-mono text-[clamp(6rem,8vw,6rem)] opacity-40">
                        [
                    </span>

                    <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] translate-y-1 mx-2 text-center">
                        What are we?
                    </h2>

                    <span className="font-mono text-[clamp(6rem,8vw,6rem)] opacity-40">
                        ]
                    </span>
                </div>

                {/* <div className="mb-5">
                    <span className="font-mono text-8xl opacity-40">[</span>
                    <h2 className="font-bold text-3xl md:text-5xl inline-block -translate-y-4 max-w-[70vw] text-center ">What are we?</h2>
                    <span className="font-mono text-8xl opacity-40">]</span>
                </div> */}
                <p className="text-xl max-w-[90vw] md:max-w-[60vw] text-center">
                    Founded in 2018, the University of Auckland Game Developer Guild is an inclusive university club dedicated to teaching students and hobbyists the core aspects of game development.
                    <br className="mb-8"/>
                    We offer tutorials throughout the semester where you learn each of the core aspects of game development (I.e. art, code, game design) as well as our semester long hackathon/game jam called GDG Jam where we put those skills to the test.
                </p>
                
            </div>
            <div className="flex justify-center flex-col items-center mb-20 md:mb-40 px-4 z-10">
                <div className="mb-5 flex items-center justify-center whitespace-nowrap max-w-[100vw]">
                    <span className="font-mono text-[clamp(6rem,8vw,6rem)] opacity-40">
                        [
                    </span>

                    <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] translate-y-1 mx-2 text-center">
                        Dream,
                        Learn,
                        <br className="block sm:hidden" />
                        Create
                    </h2>

                    <span className="font-mono text-[clamp(6rem,8vw,6rem)] opacity-40">
                        ]
                    </span>
                </div>
                {/* <div className="mb-5">
                    <span className="font-mono text-8xl opacity-40">[</span>
                    <h2 className="font-bold text-3xl md:text-5xl inline-block -translate-y-4 max-w-[70vw] text-center ">Dream, Learn, Create</h2>
                    <span className="font-mono text-8xl opacity-40">]</span>
                </div> */}
                <p className="text-xl max-w-[90vw] md:max-w-[60vw] text-center">
                    Those three words make up our philosophy.Our philosophy is to Dream, to Learn, to Create. This means that we provide our members the opportunity to pursue their ideas or learn new skills along the way. It’s all about the journey, not the destination for us.
                    <br className="mb-8"/>
                    Whether it is crafting art, brewing code, or steaming some sick beats and boiling some cool designs, we welcome them all to make a jam of a time.
                </p>
            </div>

            <div className="flex justify-center flex-col items-center mb-20 md:mb-40 px-4 z-10">
                <div className="mb-5 flex items-center justify-center whitespace-nowrap max-w-[100vw]">
                    <span className="font-mono text-[clamp(6rem,8vw,6rem)] opacity-40">
                        [
                    </span>

                    <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] translate-y-1 mx-2 text-center">
                        Meet, 
                    
                        Share,
                        <br className="block sm:hidden" />
                        Play
                        
                    </h2>

                    <span className="font-mono text-[clamp(6rem,8vw,6rem)] opacity-40">
                        ]
                    </span>
                </div>
                {/* <div className="mb-5">
                    <span className="font-mono text-8xl opacity-40">[</span>
                    <h2 className="font-bold text-3xl md:text-5xl inline-block -translate-y-4 max-w-[70vw] text-center ">Meet, Share, Play</h2>
                    <span className="font-mono text-8xl opacity-40">]</span>
                </div> */}
                <p className="text-xl max-w-[90vw] md:max-w-[60vw] text-center">
                    Gamedev is a team effort, so you can’t embark on this adventure alone. Many of our events encourage joining teams and socialising, but we don’t enforce it. We aim to be a very safe and inclusive space. Even if you’re the world’s introvert, you’re in gamedev -- everyone’s just as shy! The most fun in this club is playing each other's games, whether it's during our small showcase nights, or during a grand expo event outside of the university.
                </p>
            </div>


            <h3 className="text-center text-2xl font-KD mt-auto mb-70 z-10">
                So join us already! And then,
                <br className="mb-2"/>
                <b>Game Devs Unite!</b>

            </h3>
        </div>
    )
}