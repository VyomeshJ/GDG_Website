'use client'

import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const enterFullscreen = () => {
    if (!containerRef.current) return;

    if (containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen();
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#232323] px-4">
      {/* Iframe container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ width: "50vw", height: "50vh" }}
      >
        {/* Fullscreen button */}
        <button
          onClick={enterFullscreen}
          className="absolute top-2 right-2 z-10 px-3 py-1 text-sm bg-black/70 text-white rounded"
        >
          ⛶
        </button>

        {/* Game iframe */}
        <iframe
          src="/games/Depteavor/index.html"
          className="w-full h-full border-none"
          allow="fullscreen; autoplay; gamepad"
        />
      </div>

      {/* Centered text below iframe */}
      <h2 className="text-white text-lg font-bold mt-4 text-center">
        The game may take some time to load
      </h2>
    </div>
  );
}
