import { ComponentStory } from '@storybook/react';
import { Pokemon } from '../../model/Pokemon';
import { Pokedex } from './Pokedex';

const pokemon: Pokemon[] = [
  {
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
  {
    id: 25,
    name: {
      english: 'Pikachu',
      japanese: 'ピカチュウ',
      chinese: '皮卡丘',
      french: 'Pikachu',
    },
    count: 0,
    sprite: 'https://veekun.com/dex/media/pokemon/main-sprites/omegaruby-alphasapphire/25.png',
  },
];

export default {
  title: 'components/pokedex/Pokedex',
  component: Pokedex,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Pokedex> = (args) => <Pokedex {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  fetch: () => Promise.resolve(pokemon),
};

export const LoadingView = Template.bind({});
LoadingView.args = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fetch: () => new Promise(() => {}),
};
