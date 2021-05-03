import { ZettelInterface } from "./ZettelInterface"

export class TestZettel implements ZettelInterface {
    user : string;
    text : string;
    save = ()=>{};

    constructor (user? : string, text?: string) {
        if (user && text) {
            this.user = user;
            this.text = text;
        }
    }
}