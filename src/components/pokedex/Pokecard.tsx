import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../design-system/card/Card';
import { Pokemon } from '../../model/Pokemon';
import { Counter } from '../counter/Counter';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, h2 {
        margin: 0;
    }

    h1 {
        font-size: 1.25rem;
    }

    h2 {
        font-size: 1.5rem;
        opacity: 0.5;
    }
`;

export interface PokecardProps {
    pokemon: Pokemon
}

export const Pokecard = ({ pokemon }: PokecardProps): ReactElement => {
  const [count, setCount] = useState(pokemon.count);

  return (
    <Card>
      <ContentWrapper>
        <h1>{pokemon.name.english}</h1>
        <h2>{pokemon.name.japanese}</h2>
        <img width="120px" height="120px" src={pokemon.sprite} alt={`${pokemon.name.english} sprite`} />
        <Counter max={10} min={0} value={count} onChange={(newCount) => setCount(newCount)} />
      </ContentWrapper>
    </Card>
  );
};
