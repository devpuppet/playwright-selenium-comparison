import { Locator, Page } from "@playwright/test";
import { Component } from "./component";
import { findAsync } from "../../common/utils";

export class PeopleTab extends Component {

    _unitList: Locator;

    constructor(protected readonly page: Page, protected readonly root: Locator) {
        super(page, root);
        this._unitList = this.root.locator('app-unit');
    }

    get unitList(): Promise<Unit[]> {
        return this.mapToComponents(this._unitList, (page, root) => new Unit(page, root))
    }

    public async getUnitWithName(name: string): Promise<Unit> {
        const unit = await findAsync<Unit>(
            await this.unitList,
            async unit => (await unit.getUnitName()).toLocaleLowerCase() === name.toLowerCase()
        );

        if (!unit) {
            throw Error(`No unit with name = ${name} found`);
        }

        return unit;
    }
}

export class Unit extends Component {

    name: Locator;
    _personList: Locator;

    constructor(protected readonly page: Page, protected readonly root: Locator) {
        super(page, root);
        this.name = this.root.locator('.h3');
        this._personList = this.root.locator('app-person');
    }

    get personList(): Promise<Person[]> {
        return this.mapToComponents(this._personList, (page, root) => new Person(page, root))
    }

    public async getUnitName(): Promise<string> {
        return (await this.name.innerText()).split(": ")[1];
    }
}

export class Person extends Component {

}