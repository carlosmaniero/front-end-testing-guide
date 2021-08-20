import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'design-system/card/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  children: 'Hello, World!',
};
