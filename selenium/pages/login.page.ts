import { By, locateWith } from "selenium-webdriver";
import { Input } from "../components/input";
import { Browser } from "../core/browser";
import { Crededentials } from "../../model/Auth";
import { Button } from "../components/button";

export class LoginPage {
    private readonly LOGIN_PAGE_URL = 'https://spec-lead-notes.web.app';

    constructor(private readonly browser: Browser) {}

    get usernameInput(): Input {
        return new Input(this.browser, By.css('#username'));;
    }

    get passwordInput(): Input {
        return new Input(this.browser, By.css('#password'));
    }

    get loginButton(): Button {
        return new Button(this.browser, locateWith(By.css('button')).below(this.passwordInput.rootLocator));
    }

    public async open() {
        await this.browser.goToUrl(this.LOGIN_PAGE_URL);
    }

    public async acceptAlert() {
        await this.browser.acceptAlert();
    }

    public async login(credentials: Crededentials) {
        await this.enterCredentials(credentials);
        await this.clickLoginButton();
    }

    public async enterCredentials(credentials: Crededentials) {
        await this.enterUsername(credentials.username);
        await this.enterPassword(credentials.password);
    }

    public async enterUsername(username: string) {
        await this.usernameInput.type(username);
    }

    public async enterPassword(password: string) {
        await this.passwordInput.type(password);
    }

    public async clickLoginButton() {
        await this.loginButton.click();
    }
    
}