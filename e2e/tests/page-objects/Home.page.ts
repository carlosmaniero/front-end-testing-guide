import { ElementHandle } from 'puppeteer';
import { PageObject } from './PageObject';

export class HomePage extends PageObject {
  protected path = '/';

  async getPokemon(name: string): Promise<ElementHandle> {
    return this.document.findByText(name);
  }
}
