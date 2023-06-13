import type { Meta, StoryObj } from '@storybook/react';

import { CloseButton } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CloseButton> = {
  title: 'General/CloseButton',
  component: CloseButton,
} as Meta;

export default meta;
type Story = StoryObj<typeof CloseButton>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


