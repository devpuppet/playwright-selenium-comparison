import { Page } from "@playwright/test";

export class NetworkMocker {

    constructor(private readonly page: Page) {}

    public async mockUnitsResponse(unitsResponse: any) {
        await this.mockResponse(new RegExp('.*units'), 'GET', unitsResponse);
    }

    private async mockResponse(url: RegExp, method: 'GET' | 'POST', responseBody: any) {
        await this.page.route(url, (route, request) => {
            if (request.method() === method) {
                route.fulfill({
                    json: responseBody,
                })
            } else {
                route.continue();
            }
        });
    }
}