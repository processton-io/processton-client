import type { Meta, StoryObj } from '@storybook/react';
import StatsCard from '../../../Components/StatsCard';
import { ElementTypes, WidgetStatCardTypes } from '../../../types';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Charts/Stats',
  component: StatsCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
  args: {
    type: ElementTypes.STATS_CARD,
    name: 'Stats Card',
    title: 'Stats Card',
    subtitle: 'Subtitle',
    data: {
      type: WidgetStatCardTypes.SIMPLE,
      title: 'Stats Card',
      value: 100,
      format: false,
      icon: 'user',
      unit: 'unit',
      precision: 2,
    },
    width: {
      xxxs: 12,
      xxs: 12,
      xs: 12,
      sm: 6 ,
      md: 6,
      lg: 4,
      xl: 3,
      xxl: 2,
      xxxl: 1
    }
  },
};

export const SimpleDual: Story = {
  args: {
    type: ElementTypes.STATS_CARD,
    name: 'Stats Card',
    title: 'Stats Card',
    subtitle: 'Subtitle',
    data: {
      type: WidgetStatCardTypes.SIMPLE_DUAL,
      title: 'Stats Card',
      value: 100,
      value_2: 1500,
      format: true,
      icon: 'user',
      seperator: '/',
      unit: 'unit',
      unit_2: 'kgs',
      precision: 1,
    },
    width: {
      xxxs: 12,
      xxs: 12,
      xs: 12,
      sm: 6 ,
      md: 6,
      lg: 4,
      xl: 3,
      xxl: 2,
      xxxl: 1
    }
  },
};
