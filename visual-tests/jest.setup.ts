import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { CHROME_PATH } from './tests/config/environment';

require('pptr-testing-library/extend');

beforeAll(async (): Promise<void> => {
  global.browser = await puppeteer.launch(CHROME_PATH ? {
    pipe: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  } : undefined);
});

afterAll(async (): Promise<void> => {
  await global.browser.close();
});

expect.extend({ toMatchImageSnapshot });
