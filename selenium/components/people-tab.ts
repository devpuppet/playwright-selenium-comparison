import { By } from "selenium-webdriver";
import { Component } from "./component";
import { findAsync } from "../../common/utils";

export class PeopleTab extends Component {

    get units(): Promise<Unit[]> {
        return this.mapToComponents('//app-unit', Unit);
    }

    public async getUnitByName(unitName: string): Promise<Unit> {
        const unit = await findAsync(
            await this.units,
            async unit => ((await unit.getUnitName()).toLowerCase()).includes(unitName.toLowerCase())
        );

        if (!unit) {
            throw Error(`Unit with name = ${unitName} not found`);
        }

        return unit;
    }
}

export class Unit extends Component {

    get name() {
        return this.root.findElement(By.css('.h3'));
    }

    get people() {
        return this.mapToComponents('//app-person', Person);
    }

    public async getUnitName(): Promise<string> {
        return (await this.name.getText()).split(': ')[1];
    }
}

export class Person extends Component { }