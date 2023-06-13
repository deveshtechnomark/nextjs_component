import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Switch> = {
  title: 'FormElements/Switch',
  component: Switch,
} as Meta;

export default meta;
type Story = StoryObj<typeof Switch>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


