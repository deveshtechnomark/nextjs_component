import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: 'General/Alert',
  component: Alert,
} as Meta;

export default meta;
type Story = StoryObj<typeof Alert>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


