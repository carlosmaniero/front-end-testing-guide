import { componentToMatchSnapshot, goToComponent } from '../../config/storybook';

describe('Card', () => {
  it('renders the card with a children', async () => {
    await goToComponent('design-system-card-card--default-view', async (page, document) => {
      await componentToMatchSnapshot(page);

      const component = await document.getByText('Hello, World!');
      await component.hover();

      await componentToMatchSnapshot(page);
    });
  });
});
