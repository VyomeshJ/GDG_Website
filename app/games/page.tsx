"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Home/footer";

type Game = {
  title: string;
  href: string;
  image?: string;
  description?: string;
  author: string;
  genre?: string;
  playable?: boolean;
  publishedAt?: string;
  tags: string[];
};

type SortMode = "default" | "newest" | "oldest";

const games: Game[] = [
  {
    title: "Don't Let Them Escape, We Must Consume",
    href: "https://uoagdg.itch.io/dont-let-them-escape-we-must-consume",
    image: "https://img.itch.zone/aW1nLzE1OTY1MjkxLnBuZw==/315x250%23c/iIabR%2F.png",
    description: "Don't Let Them Escape we Must Consume",
    author: "UoAGDG",
    genre: "Simulation",
    publishedAt: "2024-07-25",
    tags: ["2D", "Horror", "Simple"],
  },
  {
    title: "Solace",
    href: "https://itsmaddienow.itch.io/solace",
    image: "https://img.itch.zone/aW1nLzE4MzIzNzE2LnBuZw==/315x250%23c/emnjor.png",
    author: "ItsMaddieNow",
    genre: "Puzzle",
    publishedAt: "2024-11-12",
    tags: ["3D", "Godot", "Indie"],
  },
  {
    title: "Unnamed Cat(s) Game",
    href: "https://anqilique.itch.io/unnamed-cats-game",
    image: "https://img.itch.zone/aW1nLzIzMjcwMzgwLnBuZw==/315x250%23c/uIRgM0.png",
    description: "UoA GDG Jam 2 2025",
    author: "Anqilique",
    genre: "Strategy",
    playable: true,
    publishedAt: "2026-04-21",
    tags: ["2D", "Cats", "No AI", "Pixel Art", "Top-Down", "Two Player"],
  },
  {
    title: "Bruh Pyramid Quest",
    href: "https://tsukeybii.itch.io/bruh-pyramid-quest",
    image: "https://img.itch.zone/aW1nLzIzMjcxNTE0LnBuZw==/315x250%23c/DWWEH9.png",
    description: "Complete the goal and win the game",
    author: "tsukeybii",
    genre: "Platformer",
    publishedAt: "2025-09-22",
    tags: ["2D", "Atmospheric", "Fantasy", "Short", "Singleplayer"],
  },
  {
    title: "Boa on the Go-a",
    href: "https://cyuni.itch.io/boa-on-the-goa",
    image: "https://img.itch.zone/aW1nLzIzMjcyMzE0LnBuZw==/315x250%23c/uW4%2Fti.png",
    description: "These flaming snakes won't get to the restaurant by themselves ya know",
    author: "Cyuni",
    genre: "Action",
    publishedAt: "2025-09-22",
    tags: ["2D", "Comedy"],
  },
  {
    title: "\u{1f9fe}Tales Of Tan\u{1f9fe}",
    href: "https://foosnail.itch.io/tales-of-tan",
    image: "https://img.itch.zone/aW1nLzIzMjU4MTg5LnBuZw==/315x250%23c/5TKtD6.png",
    description:
      "Fight through different Eras of time to Strengthen your Genetics to help your Future Fighters!",
    author: "Foosnail",
    genre: "Action",
    publishedAt: "2025-09-22",
    tags: ["storygame"],
  },
  {
    title: "Crash & Crawl",
    href: "https://last-minute-enjoyers.itch.io/crash-crawl",
    image: "https://img.itch.zone/aW1nLzIxMDYxMTE1LnBuZw==/315x250%23c/AAcZqK.png",
    author: "Last Minute Enjoyers",
    genre: "Action",
    publishedAt: "2026-04-28",
    tags: ["2D", "No AI", "Pixel Art", "Vehicles", "Zombies"],
  },
  {
    title: "Time Crash",
    href: "https://viscoelasticity.itch.io/time-crash",
    author: "viscoelasticity",
    genre: "Puzzle",
    publishedAt: "2025-05-05",
    tags: ["Pixel Art", "Singleplayer"],
  },
  {
    title: "RamRaiderz",
    href: "https://vetremere.itch.io/ramraiderz",
    image: "https://img.itch.zone/aW1nLzIxMDQxOTE5LnBuZw==/315x250%23c/RzC%2BLu.png",
    description: "This is kinda cooked",
    author: "VetreMere",
    genre: "Action",
    playable: true,
    publishedAt: "2025-05-05",
    tags: [],
  },
  {
    title: "Crash Out!",
    href: "https://k1w1fru1t.itch.io/crash-out",
    image: "https://img.itch.zone/aW1nLzIxMDI2MTM2LmdpZg==/315x250%23c/6Cgmts.gif",
    description: "Don't Crash Out!",
    author: "k1w1fru1t",
    genre: "Visual Novel",
    publishedAt: "2025-05-05",
    tags: ["No AI", "Pixel Art", "Ren'Py", "Singleplayer"],
  },
  {
    title: "Dislodged",
    href: "https://vyomesh-jamwal.itch.io/dislodged",
    image: "https://img.itch.zone/aW1nLzIxMDQ0MjYxLnBuZw==/315x250%23c/m%2B9JNl.png",
    description: "You're trapped in another world! Do your best to escape and return.",
    author: "Vyomesh Jamwal",
    genre: "Platformer",
    playable: true,
    publishedAt: "2025-05-04",
    tags: ["16x16", "2D"],
  },
  {
    title: "C.R.A.S.H",
    href: "https://notatree07.itch.io/crash",
    image: "https://img.itch.zone/aW1nLzIxMjUzNzkwLnBuZw==/315x250%23c/wKftR2.png",
    description: "A DOOM-like game where you play as a crab.",
    author: "NotATree07",
    genre: "Action",
    publishedAt: "2025-05-19",
    tags: ["3D", "Doom", "First-Person", "gdg2025", "Hand-drawn", "No AI", "Singleplayer", "Unreal Engine"],
  },
  {
    title: "\u{1f916}CRASHOUT\u{1f940}",
    href: "https://foosnail.itch.io/crashout",
    image: "https://img.itch.zone/aW1nLzIxMDQzODg5LnBuZw==/315x250%23c/UWXvTd.png",
    author: "Foosnail",
    genre: "Action",
    publishedAt: "2025-05-03",
    tags: ["4d", "Aseprite", "Bullet Hell", "GameMaker", "Godot", "Sandbox", "Singleplayer", "Story Rich", "Unity", "Unreal Engine"],
  },
  {
    title: "Fragore",
    href: "https://spectral575.itch.io/fragore",
    image: "https://img.itch.zone/aW1nLzIxMDExOTc3LnBuZw==/315x250%23c/C%2F8iCd.png",
    author: "Spectral575",
    genre: "Adventure",
    publishedAt: "2025-05-14",
    playable: true,
    tags: [],
  },
  {
    title: "Code Blue",
    href: "https://anqilique.itch.io/code-blue",
    image: "https://img.itch.zone/aW1nLzIwOTkyODcyLmpwZw==/315x250%23c/w3B8tG.jpg",
    description: "UoA GDG Jam 1 2025",
    author: "Anqilique",
    genre: "Survival",
    playable: true,
    publishedAt: "2025-05-04",
    tags: ["2D", "My First Game Jam", "No AI", "Pixel Art", "Singleplayer", "Top-Down", "Top down shooter", "uoagdgjam"],
  },
  {
    title: "Just another roguelike.exe",
    href: "https://denps.itch.io/just-another-roguelikeexe",
    image: "https://img.itch.zone/aW1nLzIwOTgyMzcxLnBuZw==/315x250%23c/2XEQ9V.png",
    description: "One tip: Don't Crash",
    publishedAt: "2025-05-01",
    author: "DenPs",
    tags: ["Roguelike"],
  },
  {
    title: "GooGooGaGone",
    href: "https://sekrets.itch.io/googoogagone",
    image: "https://img.itch.zone/aW1nLzIwMzI1ODQ2LnBuZw==/315x250%23c/1ZTETi.png",
    description: "Crash into babies from the comfort of your own home!",
    author: "Sekret",
    genre: "Racing",
    publishedAt: "2025-03-18",
    playable: true,
    tags: ["Arcade", "Driving", "Endless", "Fast-Paced", "Funny", "Low-poly", "Meme", "Physics", "Singleplayer"],
  },
  {
    title: "Gi's longest day",
    href: "https://sylky.itch.io/gis-longest-day",
    description: "For global game jam 2025",
    author: "Sylky",
    genre: "Visual Novel",
    publishedAt: "2025-01-26",
    playable: true,
    tags: [],
  },
  {
    title: "Maw, Meat and Madness",
    href: "https://greywell.itch.io/maw-meat-and-madness",
    image: "https://img.itch.zone/aW1nLzE5NjczOTc2LnBuZw==/315x250%23c/Dk9FDX.png",
    description: "Game for Boss Rush Jam 2025 - Defeat cosmic horrors in this space battler",
    author: "Greywell",
    genre: "Action",
    playable: true,
    publishedAt: "2025-02-02",
    tags: ["Asteroids", "Bullet Hell", "Gravity", "Lovecraftian Horror", "Sci-fi", "Space"],
  },
  {
    title: "station.block",
    href: "https://dragonmoffon.itch.io/station-block",
    image: "https://img.itch.zone/aW1nLzIxMDgzMzgwLnBuZw==/315x250%23c/TdPbq8.png",
    description: "build out programs to repair the stations logic",
    author: "DragonMoffon",
    genre: "Puzzle",
    publishedAt: "2025-05-05",
    tags: ["2D", "No AI", "Pixel Art", "programming", "Retro", "Short"],
  },
  {
    title: "AFTERLIFE",
    href: "https://janer567.itch.io/afterlife",
    image: "https://img.itch.zone/aW1nLzIzOTI5NDQ3LnBuZw==/315x250%23c/%2BBZfBF.png",
    description: "short quirky story based RPG",
    author: "Janer567",
    genre: "Role Playing",
    publishedAt: "2025-05-12",
    tags: ["2D", "Pixel Art", "Story Rich", "Undertale"],
  },
  {
    title: "Chrono",
    href: "https://dragonmoffon.itch.io/chrono",
    image: "https://img.itch.zone/aW1nLzE3ODAzNjU1LnBuZw==/315x250%23c/w0ScAF.png",
    description: "A small tech demo for the UoA Game Dev Guild 2024 Jam 2!",
    author: "DragonMoffon",
    genre: "Platformer",
    publishedAt: "2024-09-16",
    tags: ["2D", "Time Travel"],
  },
  {
    title: "The Last Rat",
    href: "https://korny1.itch.io/the-last-rat",
    image: "https://img.itch.zone/aW1nLzI3MDUwMDY0LnBuZw==/original/fcycXi.png",
    description: "The cat apawcalypse is here. You are the last rat.",
    author: "Korny",
    genre: "Action",
    publishedAt: "2026-05-03",
    tags: ["Cats", "Vampire"],
  },
  {
    title: "Catsle Knights",
    href: "https://matchwell.itch.io/catsle-knights",
    image: "https://img.itch.zone/aW1nLzI3MDYyMjg5LnBuZw==/original/TLza9G.png",
    description: "Gather your knights and storm the cats castle",
    author: "matchwell, Shio-y, changed_character",
    genre: "Action",
    publishedAt: "2026-05-04",
    tags: ["2D", "Cats", "Godot", "No AI", "Pixel Art", "Roguelike", "Top down shooter"],
  },
  {
    title: "Kitika's Cafe",
    href: "https://ryral.itch.io/kitikas-cafe",
    image: "https://img.itch.zone/aW1nLzI3MDQyNDE5LnBuZw==/original/bevvPi.png",
    description: "You decide to get a job at Kitika's Cafe!",
    author: "Ryral, staara, tabyrocket",
    genre: "Visual Novel",
    publishedAt: "2026-05-03",
    tags: ["2D", "Cats", "Cozy", "Cute", "Godot", "Horror", "Indie", "Meaningful Choices", "No AI"],
  },
  {
    title: "Return To Reality",
    href: "https://theskbrooook.itch.io/return-to-reality",
    author: "TheSKBrooook",
    genre: "Interactive Fiction",
    publishedAt: "2026-05-04",
    tags: [],
  },
  {
    title: "The Rat's End",
    href: "https://tabyrocket.itch.io/the-rats-end",
    image: "https://img.itch.zone/aW1nLzI3MDMxMDA2LnBuZw==/original/rCO8Up.png",
    description: "The cats must pay. Take your revenge. This is the rat's end.",
    author: "tabyrocket",
    genre: "Action, Survival",
    publishedAt: "2026-05-02",
    tags: ["3D", "Cats", "Dystopian", "Godot", "Souls-like"],
  },
  {
    title: "TURBOCATS",
    href: "https://bottlebrush.itch.io/turbocats",
    image: "https://img.itch.zone/aW1nLzI3MDE4NjUyLnBuZw==/original/WXIys1.png",
    description: "DESTROY CRAFT UPGRADE",
    author: "BottleBrush",
    genre: "Strategy, Role Playing, Shooter",
    playable: true,
    publishedAt: "2026-05-01",
    tags: ["2D", "Cats", "Crafting", "Tower Defense"],
  },
  {
    title: "One Rat Army",
    href: "https://timmiee.itch.io/one-rat-army",
    author: "Timmie",
    genre: "Shooter",
    playable: true,
    publishedAt: "2026-05-02",
    tags: ["2D"],
  },
];

const allTags = Array.from(new Set(games.flatMap((game) => game.tags))).sort((a, b) =>
  a.localeCompare(b),
);

const sortOptions: { label: string; value: SortMode }[] = [
  { label: "Default", value: "default" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];

export default function GamesPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const filteredGames = useMemo(() => {
    const matchingGames =
      selectedTags.length === 0
        ? games
        : games.filter((game) =>
            selectedTags.every((tag) => game.tags.includes(tag)),
          );

    if (sortMode === "default") return matchingGames;

    return [...matchingGames].sort((firstGame, secondGame) => {
      if (!firstGame.publishedAt && !secondGame.publishedAt) return 0;
      if (!firstGame.publishedAt) return 1;
      if (!secondGame.publishedAt) return -1;

      const firstTime = Date.parse(firstGame.publishedAt);
      const secondTime = Date.parse(secondGame.publishedAt);

      return sortMode === "newest" ? secondTime - firstTime : firstTime - secondTime;
    });
  }, [selectedTags, sortMode]);

  const toggleTag = (tag: string) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag],
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto w-full max-w-7xl px-5 pb-16 pt-[120px] md:px-8 md:pt-[210px]">

        <div className="mb-8 rounded-lg border border-black/10 bg-[#F7FAFA] p-4 shadow-sm">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="font-PSP text-sm text-[#058B8B]">Browse</h2>
                <span className="text-sm font-bold text-black/55">
                  {filteredGames.length} of {games.length} games shown
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <span className="text-sm font-bold text-black/55">Sort by</span>
                <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-black/10 bg-white p-1 shadow-inner">
                  {sortOptions.map((option) => {
                    const selected = sortMode === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSortMode(option.value)}
                        aria-pressed={selected}
                        className={`min-w-[5rem] rounded-md px-3 py-2 text-sm font-bold transition ${
                          selected
                            ? "bg-[#00c8b0] text-black shadow-sm"
                            : "text-black/60 hover:bg-black/5 hover:text-black"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-black/10 pt-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm font-bold text-black/55">
                  Filter by tags
                </span>
                {selectedTags.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedTags([])}
                    className="rounded-md border border-black/15 bg-white px-3 py-1.5 text-sm font-bold text-black/65 transition hover:border-[#058B8B]/60 hover:text-black"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <div className="flex max-h-44 flex-wrap gap-2 overflow-y-auto pr-1">
                {allTags.map((tag) => {
                  const selected = selectedTags.includes(tag);

                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      aria-pressed={selected}
                      className={`rounded-md border px-3 py-1.5 text-sm font-bold transition ${
                        selected
                          ? "border-[#00c8b0] bg-[#00c8b0] text-black"
                          : "border-black/10 bg-white text-black/65 hover:border-[#058B8B]/60 hover:text-black"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGames.map((game) => (
              <a
                key={game.href}
                href={game.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid min-h-[34rem] grid-rows-[auto_1fr] overflow-hidden rounded-lg border border-black/10 bg-white shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-[#058B8B]/60 hover:shadow-[#00c8b0]/20"
              >
                <div className="relative aspect-[315/250] overflow-hidden bg-black/5">
                  {game.image ? (
                    <Image
                      src={game.image}
                      alt={`${game.title} cover art`}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      unoptimized={game.image.endsWith(".gif")}
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#058B8B]/15 p-6 text-center">
                      <span className="font-PSP text-sm leading-relaxed text-black/75">
                        {game.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="grid min-h-0 grid-rows-[4.25rem_3.75rem_auto_1fr] gap-3 p-4">
                  <div className="min-h-0">
                    <h2 className="line-clamp-2 text-xl font-bold leading-tight text-black">
                      {game.title}
                    </h2>
                    <p className="mt-1 truncate text-sm text-black/55">
                      {game.author}
                    </p>
                  </div>

                  <p className="line-clamp-3 text-sm leading-5 text-black/65">
                    {game.description || " "}
                  </p>

                  <div className="flex min-h-[1.75rem] flex-wrap items-start gap-2">
                    {game.genre && (
                      <span className="rounded-full bg-black/6 px-3 py-1 text-xs font-bold text-black/70">
                        {game.genre}
                      </span>
                    )}
                    {game.playable && (
                      <span className="rounded-full bg-[#00c8b0]/18 px-3 py-1 text-xs font-bold text-[#056B62]">
                        Play in browser
                      </span>
                    )}
                  </div>

                  <div className="flex max-h-[5.5rem] flex-wrap content-start gap-1.5 overflow-hidden border-t border-black/10 pt-3">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/6 px-2 py-1 text-[0.7rem] font-bold text-black/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-black/10 bg-black/5 p-8 text-center text-black/60">
            No games match every selected tag.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
