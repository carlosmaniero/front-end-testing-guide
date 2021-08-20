import { componentToMatchSnapshot, goToComponent, runWithViewports } from '../../config/storybook';

describe('CardGrid', () => {
  it('renders the card with a children', async () => {
    await goToComponent('design-system-card-cardgrid--default-view', async (page) => {
      const viewports = [
        { width: 1920, height: 1080 },
        { width: 1200, height: 980 },
        { width: 980, height: 768 },
        { width: 720, height: 1024 },
        { width: 480, height: 920 },
        { width: 320, height: 720 },
      ];

      await runWithViewports(page, viewports, async () => {
        await componentToMatchSnapshot(page);
      });
    });
  });
});
