import { Component } from "./component";

export class Button extends Component {

    public async click() {
        await (await this.root).click();
    }
}