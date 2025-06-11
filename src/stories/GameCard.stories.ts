// import { Meta, StoryObj } from '@storybook/nextjs-vite';
// import GameCard from './GameCard'; // adjust if your file path differs

// const meta: Meta<typeof GameCard> = {
//   title: 'Components/GameCard',
//   component: GameCard,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   argTypes: {
//     imageUrl: {
//       control: 'text',
//     },
//     title: {
//       control: 'text',
//     },
//     content: {
//       control: 'text',
//     },
//   },
// };

// export default meta;

// type Story = StoryObj<typeof GameCard>;

// export const Default: Story = {
//   args: {
//     imageUrl: 'https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/sonicracingcrossworlds_vertical_cover.jpg.webp?itok=y7w2TQCf',
//     title: 'Game Title',
//     content: 'This is a short description about the game displayed here.',
//   },
// };

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GameCard from './GameCard';

const meta: Meta<typeof GameCard> = {
  title: 'Components/GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imageUrl: {
      control: 'text',
    },
    tag:{
      control: 'text'
    },
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GameCard>;

export const Default: Story = {
  args: {
    imageUrl: 'https://cdn.sega.co.uk/mhc-sega/public/styles/1920/public/content/media/images/raster/sonicracingcrossworlds_vertical_cover.jpg.webp?itok=y7w2TQCf',
    tag: 'ACTION + ADVENTURE',
    title: 'Sonic Crossing World:',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

