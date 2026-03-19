"use client"

import React, { useRef, useCallback, useState } from "react"

export default function GongClient() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const buttonSize = "min(60vh, calc(100vw - 2rem), calc(100vh - 2rem))"

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        style={{
          height: buttonSize,
          width: buttonSize,
          padding: "0.7rem",
          border: 0,
          borderRadius: "26px",
          background: isHovered ? "#9a9a9a" : "#878787",
          boxShadow: isHovered ? "0 12px 28px rgba(0, 0, 0, 0.35)" : "0 10px 24px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
          transition: "background-color 160ms ease, box-shadow 160ms ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/gong-assets/gong.jpg"
          alt="Gong"
          style={{
            height: "100%",
            width: "100%",
            display: "block",
            objectFit: "contain",
            borderRadius: "inherit",
            filter: isHovered ? "brightness(0.92) saturate(0.95)" : "none",
            transition: "filter 160ms ease",
          }}
        />
      </button>

      <audio ref={audioRef} src="/gong-assets/Gong Sound Effect.mp3" preload="auto" />
    </>
  )
}
