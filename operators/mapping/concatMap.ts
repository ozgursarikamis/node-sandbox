import { concatMap, of } from "rxjs";

type User = {
    userId: number;
    title: string;
    completed: boolean;
    id: number
}
export class ConcatMapSamples {
    static Run() {
        // this.Sample1();
        this.Sample2();
    }
    static Sample1() {
        const source$ = of(1, 2, 3);

        // The `concatMap()` operator is used to map each value to an Observable.
        const example$ = source$.pipe(
            concatMap(val => of(val + 10))
        );

        example$.subscribe(val => console.log(val));
    }

    static Sample2() { // create another usage sample for concatMap:
        const mainUrl: string = "https://jsonplaceholder.typicode.com/todos/";
        const httpRequests = of(`${mainUrl}1`, `${mainUrl}2`, `${mainUrl}3`);

        // The `concatMap()` operator is used to map each value to an Observable.
        const example$ = httpRequests.pipe(
            concatMap(url => fetch(url)),
            concatMap(response => response.json() as Promise<User>)
        );

        example$.subscribe((val: User) => console.log(val?.id));
    }
}