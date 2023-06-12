import { Browser as BrowserName } from "selenium-webdriver";
import { LoginPage } from "../../selenium/pages/login.page";
import { Browser } from "../../selenium/core/browser";
import { HomePage } from "../../selenium/pages/home.page";
import { NetworkMocker } from "../../selenium/mocking/network-mocker";
import { unitsResponse } from "../../mocks/units.mock";

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

    test('Mocking test', async () => {
        const userId = "1";
        const expectedUnitName = unitsResponse[0].name;
        const expectedPeopleCount = unitsResponse[0].people.length;
        const networkMocker = new NetworkMocker(browser);
        await networkMocker.mockUnitsResponse(userId, unitsResponse);

        const loginPage = new LoginPage(browser);
        await loginPage.open();
        await loginPage.acceptAlert();
        await loginPage.login({ username: 'Kamil', password: 'test' });

        const homePage = new HomePage(browser);
        const peopleTab = await homePage.openPeopleTab();
        const unit = await peopleTab.getUnitByName(expectedUnitName);
        const people = await unit.people;
        
        expect(people.length).toBe(expectedPeopleCount);
    }, 60 * 1000);

    afterEach(async () => {
        await browser.quit();
    })

});