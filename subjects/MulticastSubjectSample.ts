import { ConnectableObservable, Subject, from, multicast, share } from "rxjs";

export class MulticastSubjectSample {
    public static Run() {
        // this.Multicasting();
        this.MulticastingWithShareOperator();
    }

    static MulticastingWithShareOperator() {
        // this method uses `share` operator to multicast
        // share() is a modern version of `multicast(() => new Subject())`

        const source$ = from([1, 2, 3, 4, 5]);
        
        const shared$ = source$.pipe(share());

        shared$.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });

        shared$.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });
        
    }

    private static Multicasting() {
        const source$ = from([1, 2, 3, 4, 5]);
        const subject = new Subject();
        const multicasted$ = source$.pipe(multicast(subject)) as ConnectableObservable<unknown>;

        multicasted$.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });
        multicasted$.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        // This is, under the hood, `source.subscribe(subject)`:
        multicasted$.connect();
    }
}
