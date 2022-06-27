import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExampleTable, ExampleTableProps } from './index';

export default {
  title: 'Home/ExampleTable',
  component: ExampleTable,
} as Meta;

const Template: Story<ExampleTableProps> = (args) => <ExampleTable {...args} />;
export const defaultArgs: ExampleTableProps = {
  examples: [
    {
      id: 1,
      message: 'Example 1',
    },
    {
      id: 2,
      message: 'Example 2',
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
