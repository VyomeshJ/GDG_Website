'use client'
import Image from "next/image";
import One from "@/components/Home/1"
import Two from "@/components/Home/2"
import Three from "@/components/Home/3";
import Four from "@/components/Home/4";
import Five from "@/components/Home/5";
import Six from "@/components/Home/6";
import Footer from "@/components/Home/footer"
import Registration from "@/components/Home/Registration";
import { useState } from "react";
import Link from "next/link";


export default function Home() {
  const [overlay, setOverlay] = useState(false)
  return (
    <>
      {
        overlay &&
        <Registration overlay={overlay} showOverlay={setOverlay}/>
      }
      
      

      <div className="mt-[72px]">
        <One overlay={overlay} showOverlay={setOverlay}/>
      </div>
      <section id="about">
         <Two />
      </section>
     
      <div className="relative bg-[url('/BG/WhiteIconsBG.png')] bg-no-repeat bg-cover bg-center w-full">
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
