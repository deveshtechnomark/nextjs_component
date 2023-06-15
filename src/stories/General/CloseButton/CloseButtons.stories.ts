import type { Meta, StoryObj } from '@storybook/react';

import { CloseButtons } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CloseButtons> = {
  title: 'General/CloseButtons',
  component: CloseButtons,
} as Meta;

export default meta;
type Story = StoryObj<typeof CloseButtons>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


