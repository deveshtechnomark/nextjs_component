import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Pagination> = {
  title: 'General/Pagination',
  component: Pagination,
} as Meta;

export default meta;
type Story = StoryObj<typeof Pagination>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


