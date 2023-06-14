import { Locator, Page } from "@playwright/test";
import { Component } from "./component";

export class NavigationHeader extends Component {

    private readonly summaryButton: Locator;
    private readonly peopleButton: Locator;

    constructor(protected readonly page: Page, protected readonly root: Locator) {
        super(page, root);
        this.summaryButton = root.getByText('Summary');
        this.peopleButton = root.getByText('People');
    }

    public async isSummaryButtonDisplayed(): Promise<boolean> {
        return this.summaryButton.isVisible();
    }

    public async clickPeopleButton(): Promise<void> {
        await this.peopleButton.click();
    }
}