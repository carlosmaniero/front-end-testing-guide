import { ComponentStory } from '@storybook/react';
import { Pokecard } from './Pokecard';

export default {
  title: 'Pokedex/Pokecard',
  component: Pokecard,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Pokecard> = (args) => <div style={{ maxWidth: '250px' }}><Pokecard {...args} /></div>;

export const DefaultView = Template.bind({});
DefaultView.args = {
  pokemon: {
    id: 1,
    name: {
      english: 'Bulbasaur',
      japanese: 'フシギダネ',
      chinese: '妙蛙种子',
      french: 'Bulbizarre',
    },
    count: 5,
    sprite: 'https://veekun.com/dex/media/pokemon/main-sprites/omegaruby-alphasapphire/1.png',
  },
};
