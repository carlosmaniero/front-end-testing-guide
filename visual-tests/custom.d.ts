import { Browser } from 'puppeteer';
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import { IScopedQueryUtils } from 'pptr-testing-library/lib/typedefs';

declare global {
    var browser: Browser;
}

declare module 'puppeteer' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ElementHandle extends IScopedQueryUtils {
    }

    interface Page {
        getDocument(): Promise<ElementHandle>
    }
}
