import type { Meta, StoryObj } from '@storybook/react';

import { Alerts } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alerts> = {
  title: 'General/Alert',
  component: Alerts,
} as Meta;

export default meta;
type Story = StoryObj<typeof Alerts>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


