import { STORYBOOK_HOST } from './environment';
import { ElementHandle, Page, Viewport } from 'puppeteer';

const getComponentPage = (component: string) =>
    `http://${STORYBOOK_HOST}/iframe.html?id=${component}`


export const goToComponent = async (component: string, fn: (page: Page, document: ElementHandle) => Promise<void>) => {
    const page = await browser.newPage();
    await page.goto(getComponentPage(component));

    await fn(page, await page.getDocument());
}

export const componentToMatchSnapshot = async (page: Page, padding = 20) => {
    const rootElement = await page.$('#root');

    if (!rootElement) {
        throw new Error('#root not found! Check if storybook is on');
    }

    await page.evaluate((padding) => {
        const root = document.querySelector('#root') as HTMLElement;

        root.style.display = 'inline-block';
        root.style.padding = `${padding}px`;
    }, padding);

    const screenshot = await rootElement.screenshot();
    expect(screenshot).toMatchImageSnapshot();
}

export const disableTransitions = async (page: Page, element: ElementHandle) => {
    await page.evaluate((element) => {
        if (element) {
            element.style.transition = 'none';
            return;
        }
        document.querySelectorAll('*').forEach((element) => {
            (element as HTMLElement).style.animation = 'none';
        });
    }, element)
}

export const disableAnimations = async (page: Page, element: ElementHandle) => {
    await page.evaluate((element) => {
        if (element) {
            element.style.animation = 'none';
            return;
        }
        document.querySelectorAll('*').forEach(element => {
            (element as HTMLElement).style.animation = 'none';
        });
    }, element)
}

type ViewportCallback = (viewport: Viewport) => Promise<void>;

export const runWithViewports = async (page: Page, viewports: Viewport[], fn: ViewportCallback) => {
    for (const viewport of viewports) {
        page.setViewport(viewport);
        await fn(viewport);
    }
}