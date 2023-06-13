import type { Meta, StoryObj } from '@storybook/react';

import { TextFields } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextFields> = {
  title: 'FormElements/TextFields',
  component: TextFields,
} as Meta;

export default meta;
type Story = StoryObj<typeof TextFields>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


