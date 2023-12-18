import { ConnectableObservable, Subject, from, multicast } from "rxjs";

export class MulticastSubjectSample {
    public static Run() {
        this.Multicasting();
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
