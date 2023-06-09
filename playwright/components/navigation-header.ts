import { Locator, Page } from "@playwright/test";
import { Component } from "./component";

export class NavigationHeader extends Component {

    private readonly summaryButton: Locator;

    constructor(protected readonly page: Page, protected readonly root: Locator) {
        super(page, root);
        this.summaryButton = root.getByText('Summary');
    }

    public async isSummaryButtonDisplayed(): Promise<boolean> {
        return this.summaryButton.isVisible();
    }
}