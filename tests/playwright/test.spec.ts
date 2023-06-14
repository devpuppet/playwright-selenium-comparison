import { expect } from '@playwright/test';
import { test } from '../../playwright/fixture';
import { unitsResponse } from '../../mocks/units.mock';

test.describe('Playwright tests', () => {
    test('Login test', async ({ loginPage }) => {
        await loginPage.open();
        const homePage = await loginPage.login({ username: 'Kamil', password: 'test' });
        expect(await homePage.isDisplayed()).toBe(true);
    });

    test('Mocking test', async ({ loginPage, networkMocker }) => {
        const expectedUnit = unitsResponse[0];
        const expectedUnitName = expectedUnit.name;
        await networkMocker.mockUnitsResponse(unitsResponse);

        await loginPage.open();
        const homePage = await loginPage.login({ username: 'Kamil', password: 'test' });
        const peopleTab = await homePage.openPeopleTab();
        const unit = await peopleTab.getUnitWithName(expectedUnitName);

        expect((await unit.personList).length).toBe(expectedUnit.people.length);
    });
})
