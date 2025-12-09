import Image from "next/image";

export default function Two(){
    return(
        <div className="relative flex flex-row flex-nowrap px-[10vw] justify-between w-full bg-white pt-10 pb-10">
            <div className="relative w-[25vw] md:w-[18vw] lg:w-[12vw] aspect-square">
                <Image 
                src="/icons/DreamMascot.png"
                alt=""
                fill
                className="object-contain"

                />
            </div>
            <div className="relative w-[25vw] md:w-[18vw] lg:w-[12vw] aspect-square">
                <Image 
                src="/icons/LearnMascot.png"
                alt=""
                fill
                className="object-contain"

                />
            </div>
                <div className="relative w-[25vw] md:w-[18vw] lg:w-[12vw] aspect-square">
                <Image 
                src="/icons/CreateMascot.png"
                alt=""
                fill
                className="object-contain"

                />
            </div>
            
            
        </div>
    )
    
}
