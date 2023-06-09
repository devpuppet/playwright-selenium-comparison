import { Component } from "./component";

export class Button extends Component {
    public async click(): Promise<void> {
        await this.root.click()
    }
}