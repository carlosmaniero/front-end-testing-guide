import { goToComponent, componentToMatchSnapshot, runWithViewports } from '../../config/storybook';

describe('Counter', () => {
  it('renders the counter component with all enabled styles', async () => {
    await goToComponent('components-counter-counter--min-disabled', async (page) => {
      const viewports = [
        { width: 120, height: 32 },
        { width: 320, height: 32 },
      ];

      await runWithViewports(page, viewports, async () => {
        await componentToMatchSnapshot(page);
      });
    });
  });
});
