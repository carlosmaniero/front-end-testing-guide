import { disableTransitions, goToComponent, componentToMatchSnapshot } from '../../config/storybook';

describe('SmallButton', () => {
  it('renders a SmallButton', async () => {
    await goToComponent('design-system-buttons-smallbutton--text-icon', async (page, document) => {
      await componentToMatchSnapshot(page);

      const button = await document.getByText('+');

      await disableTransitions(page, button);

      await button.hover();

      await componentToMatchSnapshot(page);
    });
  });
});
