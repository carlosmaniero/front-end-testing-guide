import { goToComponent, componentToMatchSnapshot } from './config/storybook';

describe('Hello', () => {
  it('renders a button', async () => {
    await goToComponent('example-button--primary&viewMode=story', async (page) => {
      await componentToMatchSnapshot(page);
    });
  });
});
