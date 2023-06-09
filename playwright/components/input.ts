import { Component } from "./component";

export class Input extends Component {
    public async type(text: string): Promise<void> {
        await this.root.type(text);
    }
}