import { goToComponent, componentToMatchSnapshot, runWithViewports } from '../../config/storybook';

describe('Counter', () => {
  it('renders the counter component with all enabled styles', async () => {
    await goToComponent('components-counter-counter--all-enabled', async (page) => {
      const viewports = [
        { width: 120, height: 32 },
        { width: 320, height: 32 },
      ];

      await runWithViewports(page, viewports, async () => {
        await componentToMatchSnapshot(page);
      });
    });
  });

  it('renders the counter component with min disabled', async () => {
    await goToComponent('components-counter-counter--min-disabled', async (page) => {
      await componentToMatchSnapshot(page);
    });
  });

  it('renders the counter component with max disabled', async () => {
    await goToComponent('components-counter-counter--max-disabled', async (page) => {
      await componentToMatchSnapshot(page);
    });
  });
});
