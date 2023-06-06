import { Locator, WebElementPromise } from "selenium-webdriver";
import { Browser } from "../core/browser";

export abstract class Component {
    constructor(protected readonly browser: Browser, protected readonly _rootLocator: Locator) {}

    public get rootLocator(): Locator {
        return this._rootLocator;
    }

    protected get root(): WebElementPromise {
        return this.browser.findElement(this.rootLocator);
    }
}