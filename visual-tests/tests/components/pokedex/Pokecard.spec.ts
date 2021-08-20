import { goToComponent, componentToMatchSnapshot } from '../../config/storybook';

describe('Pokecard', () => {
  it('renders default view', async () => {
    await goToComponent('pokedex-pokecard--default-view', async (page) => {
      await componentToMatchSnapshot(page);
    });
  });
});
