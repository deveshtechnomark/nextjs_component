import type { Meta, StoryObj } from '@storybook/react';

import { Buttons } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Buttons> = {
  title: 'FormElements/Buttons',
  component: Buttons,
} as Meta;

export default meta;
type Story = StoryObj<typeof Buttons>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


