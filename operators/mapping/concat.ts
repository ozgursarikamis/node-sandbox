import { concat, of } from "rxjs";

export class ConcatSample {
    static Run() {
        this.Sample1();
    }

    static Sample1() {
        const source1$ = of('a', 'b', 'c');
        const source2$ = of('d', 'e', 'f');

        // result$ will concatenate both source1$ and source2$ consecutively.
        // might be useful when you want to wait for a request to finish before
        // e.g. posting multiple requests to a server.
        const result$ = concat(source1$, source2$);

        result$.subscribe(console.log);
    }
}