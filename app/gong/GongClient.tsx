"use client"

import React, { useRef, useCallback } from "react"

export default function GongClient() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    void audio.play().catch(() => {})
  }, [])

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handlePlay()
    }
  }, [handlePlay])

  return (
    <>
      <button
        id="gongBtn"
        aria-label="Play gong"
        onClick={handlePlay}
        onKeyDown={handleKey}
        style={{ height: "60vh", padding: 0, border: 0, background: "transparent", cursor: "pointer" }}
      >
        <img
          src="/gong-assets/gong.jpg"
          alt="Gong"
          style={{ height: "100%", width: "auto", maxWidth: "calc(100vw - 2rem)", display: "block", objectFit: "contain" }}
        />
      </button>

      <audio ref={audioRef} src="/gong-assets/Gong Sound Effect.mp3" preload="auto" />
    </>
  )
}
