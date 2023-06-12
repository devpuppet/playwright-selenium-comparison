import { Builder, Condition, Locator, WebDriver, WebElementPromise, until } from "selenium-webdriver";
import { Component } from "../components/component";
import { HttpResponse } from "selenium-webdriver/devtools/networkinterceptor";
import { } from 'selenium-webdriver/devtools/networkinterceptor';
import { Options } from "selenium-webdriver/chrome";

export class Browser {

    private driver: WebDriver;

    constructor(browserName: string) {
        const chromeOptions = new Options();
        chromeOptions.addArguments('--disable-web-security');
        this.driver = new Builder()
            .setChromeOptions(chromeOptions)
            .forBrowser(browserName)
            .build();
    }

    public findElement(locator: Locator): WebElementPromise {
        return this.driver.findElement(locator);
    }

    public async acceptAlert() {
        await this.wait(until.alertIsPresent());
        await this.driver.switchTo().alert().accept();
    }

    public async waitForComponent(component: Component) {
        await this.wait(until.elementLocated(component.rootLocator));
    }

    public async wait<T>(condition: PromiseLike<T> | Condition<T> | ((driver: WebDriver) => T | PromiseLike<T>) | Function) {
        await this.driver.wait(condition);
    }

    public async goToUrl(url: string) {
        await this.driver.get(url);
    }

    public async quit() {
        await this.driver.quit();
    }

    public async mock(options: {
        method: 'GET' | 'POST',
        url: string,
        responseBody: any,
        callback?: () => any;
    }) {
        const httpResponse = new HttpResponse(options.url);
        httpResponse.body = JSON.stringify(options.responseBody);
        httpResponse.method = options.method;
        const chromeDevtoolsProtocolConnection = await this.driver.createCDPConnection('page');
        await this.driver.onIntercept(
            chromeDevtoolsProtocolConnection,
            httpResponse,
            async () => {
                options.callback ? options.callback() : null;
            });
    }
}