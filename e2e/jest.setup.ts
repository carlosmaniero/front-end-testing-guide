import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

require('pptr-testing-library/extend');

beforeAll(async (): Promise<void> => {
  global.browser = await puppeteer.launch();
});

afterAll(async (): Promise<void> => {
  await global.browser.close();
});

expect.extend({ toMatchImageSnapshot });
