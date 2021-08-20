import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';
import { CardGrid } from './CardGrid';

export default {
  title: 'design-system/card/CardGrid',
  component: CardGrid,
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CardGrid {...args}>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
    <Card>Hello, World</Card>
  </CardGrid>
);

export const DefaultView = Template.bind({});
DefaultView.args = {
};
