
import Image from "next/image";
import { useContext } from "react";

type OneProps = {
  overlay: boolean;
  showOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function One({overlay, showOverlay}: OneProps){
    return(
        <div className="relative w-full min-h-[110vh] md:min-h-[80vh] lg:min-h-[80vh] bg-black bg-cover bg-no-repeat bg-[url('/BG/Hero.png')]"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.05)_20%,_rgba(0,0,0,0.7)_100%)]"></div>
            <div className="flex flex-col absolute gap-8 pt-[15vh] md:pt-[25vh] lg:pt-[30vh] px-[5vw] z-50">
                <h3 className="font-PSP text-[#9B5BDB] text-2xl">
                    Welcome to UoA's...
                </h3>
                <h1 className="font-bold text-white text-5xl md:text-7xl">
                    Game Developer Guild
                </h1>
                <h3 className="font-PSP text-[#AEF7EE] text-3xl">
                    Game Devs Unite!
                </h3>
                <button className="self-start bg-[#058B8B]/50 rounded-full border-4 border-white/50 flex items-center justify-center gap-4 px-4 py-3 transition-all"
                    onClick={() => showOverlay(!overlay)}
                >
                    <span className="font-PSP opacity-100 text-lg md:text-2xl">
                        Join us 
                        
                        
                    </span>
                    <Image 
                        src="/icons/arrow_right.png"
                        alt = ""
                        width={24}
                        height={24}
                        className="inline-block -mt-[2px] w-5 h-5 md:w-6 md:h-6"
                    />
                </button>
            </div>
            

            <div>
                <Image className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 block md:hidden"
                src="/icons/arrow_down.png"
                alt=""
                width={59}
                height={51}
                />
            </div>
            
        </div>
    )
}