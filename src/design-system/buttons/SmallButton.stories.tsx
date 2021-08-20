import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SmallButton } from './SmallButton';

export default {
  title: 'design-system/buttons/SmallButton',
  component: SmallButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof SmallButton>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof SmallButton> = (args) => <SmallButton {...args} />;

export const TextIcon = Template.bind({});
TextIcon.args = {
  children: '+',
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  children: 'click me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '+',
  disabled: true,
};
