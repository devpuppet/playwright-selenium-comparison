import { By, Locator, WebElementPromise, until } from "selenium-webdriver";
import { Browser } from "../core/browser";

export abstract class Component {
    constructor(protected readonly browser: Browser, protected readonly _rootLocator: Locator) { }

    public get rootLocator(): Locator {
        return this._rootLocator;
    }

    protected get root(): WebElementPromise {
        return this.browser.findElement(this.rootLocator);
    }

    protected async mapToComponents<T extends Component>(
        xpathLocator: string,
        componentType: any
    ): Promise<T[]> {
        const webElements: T[] = [];
        await this.browser.wait(until.elementsLocated(By.xpath(xpathLocator)));
        await this.root.findElements(By.xpath(xpathLocator))
            .then(units => {
                const count = units.length;
                for (let i = 0; i < count; i++) {
                    webElements.push(this.instantiateComponent(
                        componentType,
                        this.browser,
                        By.xpath(`${xpathLocator}[${i + 1}]`)
                    ));
                }
            });
        return webElements;
    }

    private instantiateComponent<T extends Component>(
        type: (new (browser: Browser, _rootLocator: Locator) => T),
        browser: Browser,
        _rootLocator: Locator): T {
        return new type(browser, _rootLocator);
    }
}