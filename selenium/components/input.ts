import { Component } from "./component";

export class Input extends Component {

    public async type(text: string) {
        await this.root.sendKeys(text);
    }
}