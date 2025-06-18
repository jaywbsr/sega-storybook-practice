"use client";

import { Header } from "@/stories/Header";
import { ItemType } from "antd/es/menu/interface";
import GameInfoCard from "@/stories/GameCardInfo";
import GameButton from "@/stories/GameButton";
import YoutubeOutlined from "@ant-design/icons/lib/icons/YoutubeOutlined";

const menuItems: ItemType[] = [
  {
    key: "worlds",
    label: (
      <a href="#/worlds">
        <span>WORLDS</span>
      </a>
    ),
  },
];

const GameInfoCards = [
  {
    imageUrl:
      "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/sonicracingcrossworlds_horizontal_cover.jpg.webp?itok=KUxd9YSE",
    title: "DIGITAL STANDARD EDITION",
    content: [{ text: "Base Game" }],
    date: "September 25, 2025",
  },
  {
    imageUrl:
      "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/sonicracingcrossworlds-digitaldeluxeedition-glamshot_0.jpg.webp?itok=qtY-IJkX",
    title: "DIGITAL DELUXE EDITION",
    content: [
      { text: "Base Game" },
      {
        text: "Watch Trailer",
        url: "https://www.youtube.com/watch?v=YQ8qcoGEg4k",
        icon: <YoutubeOutlined style={{ color: "red" }} />,
      },
      { text: "Season Pass includes 6 content packs." },
      {
        text: "Exclusive Character Pack",
        icon: <YoutubeOutlined style={{ color: "green" }} />,
      },
    ],
    date: "September 25, 2025",
  },
];

export default function Home() {
  return (
    <div>
      <Header menuItems2={menuItems} />
      <div className="flex flex-nowrap overflow-x-auto gap-5 px-4 mt-5">
        {GameInfoCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 min-w-[420px]">
            <GameButton
              label="Click me please"
              onClick={() => alert("Hi click")}
            />
            <GameInfoCard
              imageUrl={card.imageUrl}
              title={card.title}
              content={card.content}
              date={card.date}
              theme="green"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
