import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { NetworkMocker } from './mocking/network-mocker';

type Fixtures = {
    loginPage: LoginPage,
    networkMocker: NetworkMocker
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    networkMocker: async ({ page }, use) => {
        await use(new NetworkMocker(page))
    },
})