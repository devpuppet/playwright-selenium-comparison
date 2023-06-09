import { Page } from "@playwright/test";
import { NavigationHeader } from "../components/navigation-header";

export class HomePage {

    private readonly navigationHeader: NavigationHeader;

    constructor(private readonly page: Page) {
        this.navigationHeader = new NavigationHeader(page, page.locator('app-header'));
    }

    public async isDisplayed(): Promise<boolean> {
        return this.navigationHeader.isSummaryButtonDisplayed();
    }

}