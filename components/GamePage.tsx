"use client";

type GamePageProps = {
  gameName: string;
};


export default function GamePage({ gameName }: GamePageProps) {
  return (
    <div className="w-screen h-screen bg-black">
      <iframe
        src={`/games/${gameName}/index.html`}
        className="w-full h-full border-none"
        allow="fullscreen; autoplay; gamepad"
      />
    </div>
  );
}
