import { ElementHandle, Page, Viewport } from 'puppeteer';
import { STORYBOOK_HOST } from './environment';

const getComponentPage = (component: string) => `http://${STORYBOOK_HOST}/iframe.html?id=${component}`;

type GetComponentCallback = (page: Page, document: ElementHandle) => Promise<void>;

export const goToComponent = async (component: string, fn: GetComponentCallback): Promise<void> => {
  const page = await browser.newPage();
  await page.goto(getComponentPage(component));
  await fn(page, await page.getDocument());
  await page.close();
};

export const waitForAllImagesToLoad = async (page: Page): Promise<void> => {
  await page.evaluate(`(async () => {
    const selectors = Array.from(document.querySelectorAll('img'));
    await Promise.all(selectors.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve, reject) => {
        img.addEventListener('load', resolve);
        img.addEventListener('error', reject);
      });
    }));
  })()`);
};

export const componentToMatchSnapshot = async (page: Page, padding = 20): Promise<void> => {
  const rootElement = await page.$('#root');

  if (!rootElement) {
    throw new Error('#root not found! Check if storybook is on');
  }

  await page.evaluate(($padding: number) => {
    const root = document.querySelector('#root') as HTMLElement;

    root.style.display = 'inline-block';
    root.style.padding = `${$padding}px`;
  }, padding);

  const screenshot = await rootElement.screenshot();
  expect(screenshot).toMatchImageSnapshot();
};

export const disableTransitions = async (page: Page, element?: ElementHandle): Promise<void> => {
  await page.evaluate(($element: HTMLElement | null) => {
    if ($element) {
      $element.style.transition = 'none';
      return;
    }
    document.querySelectorAll('*').forEach((node) => {
      (node as HTMLElement).style.animation = 'none';
    });
  }, element || null);
};

export const disableAnimations = async (page: Page, element: ElementHandle): Promise<void> => {
  await page.evaluate(($element: HTMLElement | null) => {
    if ($element) {
      $element.style.animation = 'none';
      return;
    }
    document.querySelectorAll('*').forEach((node) => {
      (node as HTMLElement).style.animation = 'none';
    });
  }, element);
};

type ViewportCallback = (viewport: Viewport) => Promise<void>;

export const runWithViewports = async (
  page: Page, viewports: Viewport[], fn: ViewportCallback,
): Promise<void> => {
  if (!viewports.length) {
    return;
  }

  const viewport = viewports[0];

  await page.setViewport(viewport);
  await page.evaluate(($viewport: Viewport) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('root')!.style.width = `${$viewport.width}px`;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('root')!.style.height = `${$viewport.height}px`;
  }, JSON.parse(JSON.stringify(viewport)));
  await fn(viewport);
  await runWithViewports(page, viewports.slice(1), fn);
};
