import { Browser as BrowserName } from "selenium-webdriver";
import { LoginPage } from "../../selenium/pages/login.page";
import { Browser } from "../../selenium/core/browser";
import { HomePage } from "../../selenium/pages/home.page";

describe('Selenium tests', () => {

    let browser: Browser;

    beforeEach(async () => {
        browser = new Browser(BrowserName.CHROME);
    });

    test('Login test', async () => {
        const loginPage = new LoginPage(browser);
        await loginPage.open();
        await loginPage.acceptAlert();
        await loginPage.login({ username: 'Kamil', password: 'test' });

        const homePage = new HomePage(browser);
        expect(await homePage.isDisplayed()).toBe(true);
    }, 60 * 1000);

    afterAll(async () => {
        await browser.quit();
    })

});