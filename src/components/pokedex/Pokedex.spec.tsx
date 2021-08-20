import { render, screen } from '@testing-library/react';
import { Pokemon } from '../../model/Pokemon';
import { Pokedex } from './Pokedex';

describe('Pokedex', () => {
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

  it('shows a loading message', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<Pokedex fetch={() => new Promise(() => {})} />);
    expect(screen.getByText('Loading Pokédex...')).toBeInTheDocument();
  });

  it('renders pokémon', async () => {
    render(<Pokedex fetch={() => Promise.resolve(pokemon)} />);

    expect(await screen.findByText('Bulbasaur'));
    expect(await screen.findByText('フシギダネ'));
    expect(await screen.findByText('5'));
    expect(await screen.findByText('Bulbasaur'));
    expect(await screen.findByText('ピカチュウ'));
    expect(await screen.findByText('0'));
  });
});
