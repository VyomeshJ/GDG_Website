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
    <div
      className="w-screen h-screen flex items-center justify-center bg-black"
    >
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
          Fullscreen
        </button>

        {/* Game iframe */}
        <iframe
          src="/games/Depteavor/index.html"
          className="w-full h-full border-none"
          allow="fullscreen; autoplay; gamepad"
        />
      </div>
    </div>
  );
}
