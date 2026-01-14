'use client'

import Image from "next/image";
import Footer from "@/components/Home/footer";

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
    <div className="min-h-screen flex flex-col">

      {/* Main content */}
      <main className="flex-1 mt-[120px] md:mt-[200px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <a
              key={game.id}
              href={`https://uoagdg.com/games/${game.id}`}
              className={`rounded-xl overflow-hidden ${game.bg} group shadow-lg`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Image */}
              <div className="relative aspect-video">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <div className="p-4 bg-[#232323] text-white">
                <h3 className="text-lg font-bold">{game.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
