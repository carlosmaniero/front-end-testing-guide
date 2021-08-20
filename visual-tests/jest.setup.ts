import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { CHROME_PATH } from './tests/config/environment';

require('pptr-testing-library/extend');

beforeAll(async (): Promise<void> => {
  global.browser = await puppeteer.launch(CHROME_PATH ? {
    executablePath: CHROME_PATH,
    headless: true,
    devtools: true,
    args: [
      '--ignore-certificate-errors',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
    ],
  } : undefined);
});

afterAll(async (): Promise<void> => {
  await global.browser.close();
});

expect.extend({ toMatchImageSnapshot });
