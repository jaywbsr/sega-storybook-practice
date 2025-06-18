import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import gamepage from "./Page";

const meta: Meta<typeof gamepage> = {
  title: "Pages/GameGallery",
  component: gamepage,
};

export default meta;

type Story = StoryObj<typeof gamepage>;

export const Default: Story = {};
