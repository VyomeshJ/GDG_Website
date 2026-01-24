import Image from "next/image";

export default function Four(){
    return(
        <div className="font-KD">
            <h2 className="text-black text-center text-6xl font-bold mb-10">FAQ</h2>
            <div className="flex flex-col md:flex-row gap-15 justify-center p-10">
                <div className="md:w-1/4 w-full">
                    <h4 className="text-black text-center mb-5 text-3xl">I don’t know how to code!</h4>
                    <p className="text-[#2C2C2C] text-center">
                        If you don’t know how to code, that’s okay! One of our core workshops is teaching members how to code so you can come along there to learn, otherwise our Discord server has resources on some of the fundamentals of game development.
                    </p>
                </div>
                <div className="md:w-1/4 w-full">
                    <h4 className="text-black text-center mb-5 text-3xl">What if I’m non-UOA?</h4>
                    <p className="text-[#2C2C2C] text-center">
                        <b>You can still join!</b> Several of our long-lasting members are graduates, non-UOA students, industry workers, and more. We’re open to anyone and everyone, as long as you follow The Code (of Conduct), and love games and gamedev!
                    </p>
                </div>
                <div className="md:w-1/4 w-full">
                    <h4 className="text-black text-center mb-5 text-3xl">Help, I’m a total newbie...</h4>
                    <p className="text-[#2C2C2C] text-center">
                        Even if you’re ABSOLUTELY new to game development, our community is open for all to ask questions and help each other in any way
                    </p>
                </div>

            </div>
        </div>
    )
}