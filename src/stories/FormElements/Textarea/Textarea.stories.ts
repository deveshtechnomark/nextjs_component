import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Textarea> = {
  title: 'FormElements/Textarea',
  component: Textarea,
} as Meta;

export default meta;
type Story = StoryObj<typeof Textarea>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


