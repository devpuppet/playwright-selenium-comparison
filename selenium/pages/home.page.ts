import { By, Locator } from "selenium-webdriver";
import { Component } from "../components/component";
import { Browser } from "../core/browser";
import { PeopleTab } from "../components/people-tab";

export class HomePage {

    constructor(private readonly browser: Browser) {}

    get navigationHeader(): NavigationHeader {
        return new NavigationHeader(this.browser, By.css('app-header'));
    }

    public async isDisplayed(): Promise<boolean> {
        await this.browser.waitForComponent(this.navigationHeader);
        return this.navigationHeader.isSummaryLinkDisplayed();
    }

    public async openPeopleTab(): Promise<PeopleTab> {
        return this.navigationHeader.clickPeopleTab();
    }
}

export class NavigationHeader extends Component {

    get summary() {
        return this.root.findElement(By.linkText('Summary'));
    }

    get people() {
        return this.root.findElement(By.xpath("//li[a[contains(text(),'People')]]"));
    }

    public async isSummaryLinkDisplayed(): Promise<boolean> {
        return this.summary.isDisplayed();
    }

    public async clickPeopleTab(): Promise<PeopleTab> {
        await this.people.click();
        const peopleTab = new PeopleTab(this.browser, By.css('app-people'));
        await this.browser.waitForComponent(peopleTab);
        return peopleTab;
    }
}