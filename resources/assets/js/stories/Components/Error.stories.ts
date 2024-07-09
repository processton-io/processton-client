import type { Meta, StoryObj } from '@storybook/react';
import Error from '../../Components/Error';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Error/Page',
  component: Error,
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
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Four0Four: Story = {
  args: {
    code: '404',
    error_msg: 'Page not found',
    error_description: 'The page you are looking for does not exist.',
  },
};

export const ServerError: Story = {
  args: {
    code: '502',
    error_msg: 'Server Error',
    error_description: 'The server encountered a temporary error and could not complete your request. Please try again in a few minutes.',
  },
};


