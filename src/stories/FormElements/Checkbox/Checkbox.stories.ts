import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: 'FormElements/Checkbox',
  component: Checkbox,
} as Meta;

export default meta;
type Story = StoryObj<typeof Checkbox>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {
  args: {
    label: 'Checkbox'
  }
};


