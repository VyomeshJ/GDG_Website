'use client'
import Image from "next/image";
import One from "@/components/Home/1"
import Two from "@/components/Home/2"
import Three from "@/components/Home/3";
import Four from "@/components/Home/4";
import Five from "@/components/Home/5";
import Six from "@/components/Home/6";
import Footer from "@/components/Home/footer"
import { useState } from "react";

export default function Home() {
  const [overlay, setOverlay] = useState(false)
  return (
    <>
      {
        overlay &&
        <div className="fixed inset-0 bg-black/50 z-300 flex justify-center items-center">
          <div className="bg-[#2C2C2C]  rounded-xl p-6 w-[90vw] max-w-2xl">
            <div className="flex flex-col justify-between">
              <div className="flex flex-row justify-center gap-10 mb-10">
                <div className="relative bg-[#5B7546]/70 w-[50vw] h-[50vh] rounded-xl">
                  <div className="absolute inset-x-0 top-6 px-4 flex justify-end pt-3">
                    <h2 className="font-PSP text-[3vh] text-right">
                      New Member
                    </h2>
                  </div>
                  <div className="absolute bottom-0 w-full h-[35vh] rounded-xl shadow-[0_-6px_20px_rgba(0,0,0,0.3)]">
                    <div className="relative w-full h-full p-20 bg-[#5B7546] rounded-xl">
                      <Image
                        src="/icons/g_dude.png"
                        alt=""
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  </div>


                </div>
                <div className="relative bg-[#8A424F]/70 w-[50vw] h-[50vh] rounded-xl">
                  
                  <div className="absolute top-0 w-full h-[35vh] rounded-xl shadow-[0_-6px_20px_rgba(0,0,0,0.3)]">
                    <div className="relative w-full h-full p-20 bg-[#8A424F] rounded-xl">
                      <Image
                        src="/icons/r_dude.png"
                        alt=""
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-6 px-4 flex justify-end pb-3">
                    <h2 className="font-PSP text-[3vh] text-right">
                      Returning Member
                    </h2>
                  </div>


                </div>
                
              </div>
              <h2 className="font-SL text-3xl text-center">
                Anyone can join, even if you’re a grad or non-UOA! Mebership is just $5 per sem~
              </h2>
              
            </div>
            
          </div>
          <button
            className="fixed top-5 right-5 text-white text-6xl font-bold z-[400]"
            onClick={() => setOverlay(!overlay)}
          >
            &times;
          </button>

        </div>
      }
      
      

      <div className="mt-[72px]">
        <One overlay={overlay} showOverlay={setOverlay}/>
      </div>
      <section id="about">
         <Two />
      </section>
     
      <div className="relative bg-[url('/BG/WhiteIconsBG.png')] bg-repeat w-full">
        <section >
          <Three />
        </section>
        <Four />
        <Five />
        <Six />
        <Footer />
      </div>
      
    </>
  );
}
