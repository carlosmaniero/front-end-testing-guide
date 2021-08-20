/* eslint-disable no-console */
import { disableTransitions, goToComponent, componentToMatchSnapshot } from '../../config/storybook';

describe('SmallButton', () => {
  it('renders a SmallButton', async () => {
    console.log('start');
    await goToComponent('design-system-buttons-smallbutton--text-icon', async (page, document) => {
      console.log('opened');
      await componentToMatchSnapshot(page);
      console.log('first screenshot');

      const button = await document.getByText('+');

      await disableTransitions(page, button);

      await button.hover();

      await componentToMatchSnapshot(page);
    });
  });
});
