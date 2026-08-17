"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Home/footer";
import gamesData from "@/data/games.json";

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

const games = (gamesData as Game[]).map((game, index) => ({
  ...game,
  id: `${game.href}-${index}`,
}));

const allTags = Array.from(new Set(games.flatMap((game) => game.tags))).sort((a, b) =>
  a.localeCompare(b),
);

const sortOptions: { label: string; value: SortMode }[] = [
  { label: "Default", value: "default" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const filteredGames = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase();
    const matchingGames =
      normalizedQuery.length === 0 && selectedTags.length === 0
        ? games
        : games.filter((game) => {
            const matchesTags = selectedTags.every((tag) => game.tags.includes(tag));
            const searchableText = [
              game.title,
              game.author,
              game.description,
              game.genre,
              ...game.tags,
            ]
              .filter(Boolean)
              .join(" ")
              .toLocaleLowerCase();

            return matchesTags && searchableText.includes(normalizedQuery);
          });

    if (sortMode === "default") return matchingGames;

    return [...matchingGames].sort((firstGame, secondGame) => {
      if (!firstGame.publishedAt && !secondGame.publishedAt) return 0;
      if (!firstGame.publishedAt) return 1;
      if (!secondGame.publishedAt) return -1;

      const firstTime = Date.parse(firstGame.publishedAt);
      const secondTime = Date.parse(secondGame.publishedAt);

      return sortMode === "newest" ? secondTime - firstTime : firstTime - secondTime;
    });
  }, [searchQuery, selectedTags, sortMode]);

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
                <span className="font-KD text-sm font-bold text-black/55">
                  {filteredGames.length} of {games.length} games shown
                </span>
              </div>

              <div className="flex flex-col gap-3 xl:flex-row xl:items-end">
                <label className="flex min-w-0 flex-col gap-2 sm:min-w-[19rem]">
                  <span className="font-KD text-sm font-bold text-black/55">
                    Search games
                  </span>
                  <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 shadow-inner transition focus-within:border-[#058B8B]/60">
                    <span
                      aria-hidden="true"
                      className="relative size-3.5 shrink-0 rounded-full border-2 border-black/30 after:absolute after:left-[9px] after:top-[9px] after:h-1.5 after:w-0.5 after:-rotate-45 after:rounded-full after:bg-black/30"
                    />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Title, creator, genre or tag"
                      className="min-w-0 flex-1 bg-transparent py-2.5 font-KD text-sm font-bold text-black outline-none placeholder:font-normal placeholder:text-black/35"
                    />
                  </div>
                </label>

                <div className="flex flex-col gap-2">
                  <span className="font-KD text-sm font-bold text-black/55">Sort by</span>
                  <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-black/10 bg-white p-1 shadow-inner">
                    {sortOptions.map((option) => {
                      const selected = sortMode === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSortMode(option.value)}
                          aria-pressed={selected}
                          className={`min-w-[5rem] rounded-md px-3 py-2 font-KD text-sm font-bold transition ${
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
            </div>

            <div className="flex flex-col gap-3 border-t border-black/10 pt-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-KD text-sm font-bold text-black/55">
                  Filter by tags
                </span>
                {selectedTags.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedTags([])}
                    className="rounded-md border border-black/15 bg-white px-3 py-1.5 font-KD text-sm font-bold text-black/65 transition hover:border-[#058B8B]/60 hover:text-black"
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
                      className={`rounded-md border px-3 py-1.5 font-KD text-sm font-bold transition ${
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
                key={game.id}
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
                      <span className="font-bold text-sm leading-relaxed text-black/75">
                        {game.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="grid min-h-0 grid-rows-[4.25rem_3.75rem_auto_1fr] gap-3 p-4">
                  <div className="min-h-0">
                    <h2 className="line-clamp-2 font-bold text-xl leading-tight text-black">
                      {game.title}
                    </h2>
                    <p className="mt-1 truncate font-KD text-sm text-black/55">
                      {game.author}
                    </p>
                  </div>

                  <p className="line-clamp-3 font-KD text-sm leading-5 text-black/65">
                    {game.description || " "}
                  </p>

                  <div className="flex min-h-[1.75rem] flex-wrap items-start gap-2">
                    {game.genre && (
                      <span className="rounded-full bg-black/6 px-3 py-1 font-KD text-xs font-bold text-black/70">
                        {game.genre}
                      </span>
                    )}
                    {game.playable && (
                      <span className="rounded-full bg-[#00c8b0]/18 px-3 py-1 font-KD text-xs font-bold text-[#056B62]">
                        Play in browser
                      </span>
                    )}
                  </div>

                  <div className="flex max-h-[5.5rem] flex-wrap content-start gap-1.5 overflow-hidden border-t border-black/10 pt-3">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/6 px-2 py-1 font-KD text-[0.7rem] font-bold text-black/50"
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
          <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-black/10 bg-black/5 p-8 text-center font-KD text-black/60">
            No games match your search and selected tags.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
