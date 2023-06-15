import type { Meta, StoryObj } from '@storybook/react';

import  {Breadcrumbs}  from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Breadcrumbs> = {
  title: 'General/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


