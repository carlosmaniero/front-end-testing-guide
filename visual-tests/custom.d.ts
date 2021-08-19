import { Page } from './../src/stories/Page';
import { IScopedQueryUtils } from 'pptr-testing-library/lib/typedefs';
import { Browser, ElementHandle } from 'puppeteer';

declare global {
    var browser: Browser;
};

declare module "puppeteer" {
    interface Page {
        getDocument(): Promise<ElementHandle>
    }

    interface ElementHandle extends IScopedQueryUtils {

    }
}