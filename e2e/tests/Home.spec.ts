import { HomePage } from './page-objects/Home.page';

describe('Homepage', () => {
  it('show a message', async () => {
    const homePage = new HomePage();

    await homePage.open(async () => {
      expect(await homePage.getPokemon('Bulbasaur')).not.toBeNull();
      expect(await homePage.getPokemon('Sandslash')).not.toBeNull();
    });
  });
});
