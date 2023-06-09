import { Page } from "@playwright/test";
import { Crededentials } from "../../model/Auth";
import { HomePage } from "./home.page";
import { Input } from "../components/input";
import { Button } from "../components/button";

export class LoginPage {

    private readonly usernameInput: Input;
    private readonly passwordInput: Input;
    private readonly loginButton: Button;

    constructor(protected readonly page: Page) {
        this.usernameInput = new Input(page, this.page.locator('#username'));
        this.passwordInput = new Input(page, this.page.locator('#password'));
        this.loginButton = new Button(page, this.page.locator('button', { hasText: 'Login' }));
    }

    public async open() {
        await this.page.goto('https://spec-lead-notes.web.app');
    }

    public async login(credentials: Crededentials) {
        await this.enterUsername(credentials.username);
        await this.enterPassword(credentials.password);
        await this.clickLoginButton();
        await this.page.waitForResponse(new RegExp(".*login"));
        return new HomePage(this.page);
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