import { delay, interval, map, mergeMap, of, take } from "rxjs";

export class MergeMapSample {
    static Run() {
        this.Sample1();
    }

    static Sample1() {
        const mainUrl: string = "https://jsonplaceholder.typicode.com/todos/";
        const urls$ = of(`${mainUrl}1`, `${mainUrl}2`, `${mainUrl}3`);

        const sample$ = urls$.pipe(
            mergeMap(url => fetch(url).then(response => response.json()))
        );

        // mergeMap handles things in parallel
        // concatMap handles things in sequence
        // order does not matter for `mergeMap`
        sample$.subscribe({
            next: (value: any) => console.log(value.id),
            complete: () => console.log("complete")
        });
    }
}