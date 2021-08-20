import { waitForAllImagesToLoad, goToComponent, componentToMatchSnapshot } from '../../config/storybook';

describe('Pokedex', () => {
  it('renders the loading page', async () => {
    await goToComponent('components-pokedex-pokedex--loading-view', async (page) => {
      await componentToMatchSnapshot(page);
    });
  });

  it('renders the fetched page', async () => {
    await goToComponent('components-pokedex-pokedex--default-view', async (page) => {
      await waitForAllImagesToLoad(page);
      await componentToMatchSnapshot(page);
    });
  });
});
