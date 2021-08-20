import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import { Counter } from './Counter';

export default {
  title: 'components/counter/Counter',
  component: Counter,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const MinDisabled = Template.bind({});

MinDisabled.args = {
  max: 2,
  min: 0,
  value: 0,
  onChange: action('changed'),
};

export const AllEnabled = Template.bind({});

AllEnabled.args = {
  max: 2,
  min: 0,
  value: 1,
  onChange: action('changed'),
};

export const MaxDisabled = Template.bind({});

MaxDisabled.args = {
  max: 2,
  min: 0,
  value: 2,
  onChange: action('changed'),
};
