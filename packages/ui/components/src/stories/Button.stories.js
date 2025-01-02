import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'select', options: ['plain', 'solid', 'soft', 'outlined', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'neutral', 'danger', 'success', 'warning'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid = {
  args: {
    label: 'Button',
    variant: 'solid',
  },
};

export const Plain = {
  args: {
    label: 'Button',
    variant: 'plain',
  },
};

export const Soft = {
  args: {
    label: 'Button',
    variant: 'soft',
  },
};

export const Outlined = {
  args: {
    label: 'Button',
    variant: 'outlined',
  },
};

export const Ghost = {
  args: {
    label: 'Button',
    variant: 'ghost',
  },
};