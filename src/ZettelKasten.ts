import {ZettelInterface} from "./model/ZettelInterface"
import { StringUtils } from "./util/StringUtils"

export class ZettelKasten {

    private zettels : ZettelInterface[];


    add(zettel : ZettelInterface) {
        this.zettels.push(zettel);
    }

    size() : number {
        return this.zettels.length;
    }

    contains(zettel : ZettelInterface) {
        return this.zettels.includes(zettel);
    }

    filterByTag(tag: string) :  ZettelKasten {
        let filteredList  = new ZettelKasten([]);
        this.zettels.forEach(zettel=> {
            let tags = StringUtils.getHashtags(zettel.text)
            if (tags.includes(tag)) {
                filteredList.add(zettel);
            }
        });
        return filteredList;
    }

    constructor(zettels?: ZettelInterface[]) {
        if (zettels) {
            this.zettels = zettels
        } else {
            this.zettels = [];
        }
    }
}