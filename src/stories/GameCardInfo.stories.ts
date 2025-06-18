import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import GameInfoCard from "./GameCardInfo";

const meta: Meta<typeof GameInfoCard> = {
  title: "components/GameInfoCard",
  component: GameInfoCard,
};

export default meta;

type Story = StoryObj<typeof GameInfoCard>;

export const Default: Story = {
  args: {
    imageUrl: "https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/sonicracingcrossworlds_horizontal_cover.jpg.webp?itok=KUxd9YSE",
    title: "Epic Game",
    date: "Available: 2025-09-20",
    content: [
      
    ],
  },
};
