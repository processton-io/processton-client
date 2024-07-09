import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ActionButton from '../../../Components/Form/ActionButton';
import {ButtonType, IconsList} from '../../../types';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Form/Button',
  component: ActionButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    label: { control: 'text' },
    type: { control: 'select', options: ["button", "submit", "reset"] },
    colorType: { control: 'select', options: ButtonType },
    icon: { control: 'select', options: IconsList },
    className: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    colorType: 'primary',
    type: 'button',
    label: 'Button',
    className: '',
    icon: ''
  },
};

export const Secondary: Story = {
  args: {
    colorType: 'secondary',
    type: 'button',
    label: 'Button',
    className: '',
    icon: ''
  },
};

export const Dangerous: Story = {
  args: {
    colorType: 'dangerous',
    type: 'button',
    label: 'Button',
    className: '',
    icon: ''
  },
};

export const Warning: Story = {
  args: {
    colorType: 'warning',
    type: 'button',
    label: 'Button',
    className: '',
    icon: ''
  },
};

export const Success: Story = {
  args: {
    colorType: 'success',
    type: 'button',
    label: 'Button',
    className: '',
    icon: ''
  },
};

