import { ReactElement, useEffect, useState } from 'react';
import { CardGrid } from '../../design-system/card/CardGrid';
import { Pokemon } from '../../model/Pokemon';
import { pokedex } from '../../services/api';
import { Pokecard } from './Pokecard';

export interface PokedexProps {
    fetch?: typeof pokedex
}

export const Pokedex = ({ fetch }: PokedexProps): ReactElement => {
  const fetchFn = fetch || pokedex;
  const [pokemon, setPokemon] = useState<Pokemon[] | undefined>();

  useEffect(() => {
    fetchFn().then((data) => {
      setPokemon(data);
    }).catch((err) => {
      throw err;
    });
  }, []);

  if (pokemon) {
    return (
      <CardGrid>
        {pokemon.map((pokemonItem) => <Pokecard key={pokemonItem.id} pokemon={pokemonItem} />)}
      </CardGrid>
    );
  }

  return (
    <div>
      Loading Pokédex...
    </div>
  );
};
