import { componentToMatchSnapshot, goToComponent } from '../../config/storybook';

describe('Card', () => {
  it('renders the card with a children', async () => {
    await goToComponent('design-system-card-card--default-view', async (page) => {
      await componentToMatchSnapshot(page);
    });
  });
});
