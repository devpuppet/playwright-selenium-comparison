import { By, Locator} from "selenium-webdriver";
import { Component } from "../components/component";
import { Browser } from "../core/browser";

export class HomePage {

    constructor(private readonly browser: Browser) {}

    get navigationHeader(): NavigationHeader {
        return new NavigationHeader(this.browser, By.css('app-header'));
    }

    public async isDisplayed(): Promise<boolean> {
        await this.browser.waitForComponent(this.navigationHeader);
        return this.navigationHeader.isSummaryLinkDisplayed();
    }
}

export class NavigationHeader extends Component {

    constructor(protected readonly browser: Browser, protected readonly _rootLocator: Locator) {
        super(browser, _rootLocator);
    }

    get summary() {
        return this.root.findElement(By.linkText('Summary'));;
    }

    public async isSummaryLinkDisplayed(): Promise<boolean> {
        return this.summary.isDisplayed();
    }
}