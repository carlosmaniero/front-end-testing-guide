require('pptr-testing-library/extend');
import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { CHROME_PATH } from './tests/config/environment';


beforeAll(async () => {
    global.browser = await puppeteer.launch(CHROME_PATH ? {
        executablePath: CHROME_PATH,
        args: ['--no-sandbox', '--disable-dev-shm-usage'],
    } : undefined);
});

afterAll(async () => {
    global.browser.close();
})

expect.extend({ toMatchImageSnapshot });