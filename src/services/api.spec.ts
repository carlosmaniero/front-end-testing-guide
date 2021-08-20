import nock from 'nock';
import { pokedex as fetchPokedex } from './api';

describe('API', () => {
  const pokemon = {
    id: 1,
    name: {
      english: 'Bulbasaur',
      japanese: 'フシギダネ',
      chinese: '妙蛙种子',
      french: 'Bulbizarre',
    },
    type: [
      'Grass',
      'Poison',
    ],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      'Sp. Attack': 65,
      'Sp. Defense': 65,
      Speed: 45,
    },
  };
  const successResponse = [
    pokemon,
  ];

  it('returns the api response', async () => {
    nock('https://raw.githubusercontent.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get('/fanzeyi/pokemon.json/master/pokedex.json')
      .reply(200, successResponse);

    expect(await fetchPokedex()).toEqual([{ ...pokemon, count: 0 }]);
  });
});
