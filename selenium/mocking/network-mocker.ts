import { Browser } from "../core/browser";

export class NetworkMocker {

    constructor(private readonly browser: Browser) { }

    public async mockUnitsResponse(userId: string, responseBody: any) {
        await this.browser.mock({
            method: 'GET',
            url: `https://spec-lead-notes-be.onrender.com/${userId}/units`,
            responseBody: responseBody
        });
    }
}