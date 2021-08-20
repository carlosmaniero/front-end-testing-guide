import { ElementHandle } from 'puppeteer';
import { PageObject } from './PageObject';

export class HomePage extends PageObject {
  protected path = '/';

  async getFilenameText(): Promise<ElementHandle> {
    return this.document.getByText('src/App.tsx');
  }
}
