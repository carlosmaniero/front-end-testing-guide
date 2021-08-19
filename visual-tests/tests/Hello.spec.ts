import { goToComponent, componentToMatchSnapshot } from "./config/storybook";

describe('Hello', () => {
    it('returns 1 == 1', async () => {
        await goToComponent('example-button--primary&viewMode=story', async (page) => {
            await componentToMatchSnapshot(page);
        });
    });
});