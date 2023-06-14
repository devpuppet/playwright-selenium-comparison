import { Locator, Page } from "@playwright/test";

export class Component {
    constructor(protected readonly page: Page, protected readonly root: Locator) { }

    protected async mapToComponents<T extends Component>(
        listLocator: Locator,
        componentFactory: (page: Page, root: Locator) => T
    ): Promise<T[]> {
        const components = [];
        for (const element of await listLocator.all()) {
            components.push(componentFactory(this.page, element));
        }
        return components;
    }
}