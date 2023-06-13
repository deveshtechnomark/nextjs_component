import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tooltip> = {
  title: 'General/Tooltip',
  component: Tooltip,
} as Meta;

export default meta;
type Story = StoryObj<typeof Tooltip>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


