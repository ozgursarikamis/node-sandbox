import { interval, map, merge, take } from "rxjs";

export class Merge {
    static Run() {
        this.Sample1();
    }

    static Sample1() {
        
        const series1$ = interval(1000).pipe(map(x => `Series 1: ${x}`));
        const series2$ = interval(500).pipe(map(x => `Series 2: ${x}`));

        const merged$ = merge(series1$, series2$).pipe(take(10));

        merged$.subscribe(val => console.log(val));
    }

    static Sample2_HTTP() {
        


    }
}