import { exhaustAll, from, interval, map, take } from "rxjs";

export class ExhaustAll {
    static Run() {
        this.Sample1();
    }

    static Sample1() {
        // Simulate HTTP requests
        function getData(data: unknown) {
            return interval(1000).pipe(
                take(3),
                map(i => `Response ${i + 1} for request ${data}`)
            );
        }

        // Array of requests
        const requests = [1, 2, 3, 4];

        // Create an observable for each request
        const observables$ = from(requests).pipe(
            map(req => getData(req)),
            exhaustAll()
        );

        observables$.subscribe(console.log);
    }

    // simulate http request:
    static getData(data: any) {
        return interval(1000).pipe(
            take(5),
            map(x => `${data} ${x}`)
        );
    }
}