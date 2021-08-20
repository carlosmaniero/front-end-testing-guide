import { ElementHandle, Page } from 'puppeteer';

const APP_HOST = process.env.APP_HOST || 'localhost:3000';

type OpenCallback = () => Promise<void> | void;

export abstract class PageObject {
  protected document!: ElementHandle<Element>;

  private page!: Page;

  protected abstract path: string;

  async open(callback: OpenCallback): Promise<void> {
    this.page = await this.getOrCreatePage();
    await this.page.goto(`http://${APP_HOST}${this.path}`);
    this.document = await this.page.getDocument();

    await callback();
    await this.page.close();
  }

  private async getOrCreatePage(): Promise<Page> {
    if (!this.page) {
      this.page = await browser.newPage();
    }

    return this.page;
  }
}
