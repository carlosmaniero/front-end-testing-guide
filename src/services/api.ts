import { Pokemon } from '../model/Pokemon';

const mapToPokemon = (response: Partial<Pokemon>[]): Pokemon[] => response
  .map((pokemon) => ({ ...pokemon, count: 0 })) as Pokemon[];

const pokedexURL = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json';

export const pokedex = (): Promise<Pokemon[]> => fetch(pokedexURL)
  .then((response) => response.json())
  .then((response) => mapToPokemon(response));
