"use client";

import GameCard from "@/stories/GameCard";
import { Header } from "@/stories/Header";

export default function Home() {
  const gameCards = [
    {
      imageUrl:
        "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/raidou_remastered_tmotsa_vertical_cover.jpg.webp?itok=X9wFYT00",
      title: "RAIDOU REMASTERED: THE MYSTERY OF THE SOULLESS ARMY",
      tag: "JRPG",
      content:
        "The story of apprentice detective and Devil Summoner extraordinaire Raidou Kuzunoha XIV returns in this remastered classic! Call upon you...",
    },
    {
      imageUrl:
        "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/sonicracingcrossworlds_vertical_cover.jpg.webp?itok=y7w2TQCf",
      title: "SONIC RACING: CROSSWORLDS",
      tag: "ACTION + ADVENTURE",
      content:
        "Drift Across Dimensions! Race across land, sea, air and space in Sonic Racing: CrossWorlds!",
    },
    {
      imageUrl:
        "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/shinobi_aov_vertical_cover.jpg.webp?itok=uspdKLnw",
      title: "SHINOBI: ART OF VENGEANCE",
      tag: "ACTION",
      content:
        "The iconic SHINOBI, Joe Musashi, returns in an all-new 2D action platformer with a unique hand-drawn...",
    },
    {
      imageUrl:
        "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/yakuza0dc-vertical_cover.jpg.webp?itok=pAw8oxBw",
      title: "YAKUZA 0 DIRECTOR'S CUT",
      tag: "ACTION + ADVENTURE",
      content:
        "Yakuza 0 Director's Cut is the definitive edition of the critically acclaimed origin story, now on Nintendo Switch™ 2.",
    },
  ];

  return (
    <div>
      <Header />

      <div className="flex flex-nowrap overflow-x-auto gap-5 px-4 mt-5">
        {gameCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 min-w-[320px]">
            <GameCard
              imageUrl={card.imageUrl}
              title={card.title}
              tag={card.tag}
              content={card.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
