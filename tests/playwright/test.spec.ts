import { expect } from '@playwright/test';
import { test } from '../../playwright/fixture';

test.describe('Playwright tests', () => {
    test('Login test', async ({ loginPage }) => {
        await loginPage.open();
        const homePage = await loginPage.login({ username: 'Kamil', password: 'test' });
        expect(await homePage.isDisplayed()).toBe(true);
    });
})
