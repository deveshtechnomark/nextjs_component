import type { Meta, StoryObj } from '@storybook/react';

import { Typographies } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typographies> = {
  title: 'Typographies',
  component: Typographies,
} as Meta;

export default meta;
type Story = StoryObj<typeof Typographies>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


