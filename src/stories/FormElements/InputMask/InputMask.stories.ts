import type { Meta, StoryObj } from '@storybook/react';

import { InputMask } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InputMask> = {
  title: 'FormElements/InputMask',
  component: InputMask,
} as Meta;

export default meta;
type Story = StoryObj<typeof InputMask>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


