'use client'
import Image from "next/image";


export default function Home() {
  return (
    <div className="mt-[120px] md:mt-[200px]">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-300 p-4">Item 1</div>
        <div className="bg-green-300 p-4">Item 2</div>
        <div className="bg-blue-300 p-4">Item 3</div>
        <div className="bg-red-300 p-4">Item 4</div>
        <div className="bg-green-300 p-4">Item 5</div>
        <div className="bg-blue-300 p-4">Item 6</div>
        {/* add as many items as you want */}
      </div>
      
    </div>
  );
}
