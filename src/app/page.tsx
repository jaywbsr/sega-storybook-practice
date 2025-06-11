'use client';

import GameCard from "@/stories/GameCard";
import { Header } from "@/stories/Header";

export default function Home() {

  const gameCards = [
  {
    imageUrl:
      "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/raidou_remastered_tmotsa_vertical_cover.jpg.webp?itok=X9wFYT00",
    title: "Sonic Crossing World:",
    tag: "ACTION + ADVENTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    imageUrl:
      "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/sonicracingcrossworlds_vertical_cover.jpg.webp?itok=y7w2TQCf",
    title: "Sonic Crossing World:",
    tag: "ACTION + ADVENTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    imageUrl:
      "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/shinobi_aov_vertical_cover.jpg.webp?itok=uspdKLnw",
    title: "Sonic Crossing World:",
    tag: "ACTION + ADVENTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    imageUrl:
      "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/yakuza0dc-vertical_cover.jpg.webp?itok=pAw8oxBw",
    title: "Sonic Crossing World:",
    tag: "ACTION + ADVENTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

  return (
    <div>
      <Header/>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: 20, justifyContent: 'center', alignContent: 'center' }}>
  {gameCards.map((card, index) => (
    <GameCard
      key={index}
      imageUrl={card.imageUrl}
      title={card.title}
      tag={card.tag}
      content={card.content}
    />
  ))}
</div>


    </div>
  );
}
