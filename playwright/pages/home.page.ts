import { Page } from "@playwright/test";
import { NavigationHeader } from "../components/navigation-header";
import { PeopleTab } from "../components/people-tab";

export class HomePage {

    private readonly navigationHeader: NavigationHeader;

    constructor(private readonly page: Page) {
        this.navigationHeader = new NavigationHeader(page, page.locator('app-header'));
    }

    public async isDisplayed(): Promise<boolean> {
        return this.navigationHeader.isSummaryButtonDisplayed();
    }

    public async openPeopleTab(): Promise<PeopleTab> {
        const responsePromise = this.page.waitForResponse(new RegExp('.*units'));
        await this.navigationHeader.clickPeopleButton();
        await responsePromise;
        return new PeopleTab(this.page, this.page.locator('app-people'));
    }

}