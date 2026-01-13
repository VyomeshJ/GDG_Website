'use client'

import Image from "next/image";

export default function Home() {
  const games = [
    {
      id: "depteavor",
      title: "Depteavor",
      image: "/GameCovers/depteavor.png",
      bg: "bg-red-300",
    },
  ];

  return (
    <div className="mt-[120px] md:mt-[200px] px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <a
            key={game.id}
            href={`https://gdg-website-kappa.vercel.app/games/${game.id}`}
            className={`rounded-xl overflow-hidden ${game.bg} group shadow-lg`}
            target="_blank" // optional: opens in a new tab
            rel="noopener noreferrer"
          >
            {/* Image */}
            <div className="relative aspect-video">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <div className="p-4 bg-black/60 text-white">
              <h3 className="text-lg font-bold">{game.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
