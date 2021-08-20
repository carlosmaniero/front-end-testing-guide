import { HomePage } from './page-objects/Home.page';

describe('Homepage', () => {
  it('show a message', async () => {
    const homePage = new HomePage();

    await homePage.open(async () => {
      expect(await homePage.getFilenameText()).not.toBeNull();
    });
  });
});
