import { Locator, Page } from "@playwright/test";

export class Component {
    constructor(protected readonly page: Page, protected readonly root: Locator) {}
}