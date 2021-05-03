import { expect } from "chai"
import "mocha"
import { ZettelKasten } from "./ZettelKasten"
import { TestZettel } from "./model/TestZettel"


describe("ZettelKasten",() => {

    it("creates a ZettelKasten from empty list", () => {
        let zettels = [];
        let zettelKasten = new ZettelKasten([]);
        expect(zettelKasten).to.not.be.null;
    });

    it("creates a ZettelKasten when no argument given to constructor", ()=> {
        let zettelKasten = new ZettelKasten();
        expect(zettelKasten).to.not.be.null;
    });

    it("accepts new zettel with add method, and finds it with contains", ()=> {
        let zettelKasten = new ZettelKasten();
        let zettel = new TestZettel();
        zettelKasten.add(zettel);
        expect(zettelKasten.contains(zettel)).to.be.true;
    });

    it("does not find zettel that is not in it", ()=> {
        let zettelKasten = new ZettelKasten();
        let zettel = new TestZettel();
        expect(zettelKasten.contains(zettel)).to.be.false;
    });

    it("can construct ZettelKasten with nonempty list",()=>{
        let zettel1 = new TestZettel("adam", "a #pie");
        let zettel2 = new TestZettel("adam", "a #ham");
        let zettels = [zettel1, zettel2];
        let zettelKasten = new ZettelKasten(zettels);
    });
});