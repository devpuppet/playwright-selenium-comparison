import { Builder, Condition, Locator, WebDriver, WebElementPromise, until } from "selenium-webdriver";
import { Component } from "../components/component";

export class Browser {

    private driver: WebDriver;

    constructor(browserName: string) {
        this.driver = new Builder().forBrowser(browserName).build();
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

    public async wait<T>(condition: PromiseLike<T>|Condition<T>|((driver: WebDriver) => T | PromiseLike<T>)|Function) {
        await this.driver.wait(condition);
    }

    public async goToUrl(url: string) {
        await this.driver.get(url);
    }

    public async quit() {
        await this.driver.quit();
    }
}