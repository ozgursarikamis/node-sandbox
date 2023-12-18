import { ReplaySubject } from "rxjs";

export class ReplaySubjectSample {
    public static Run() {
        // It stores multiple values from the Observable execution
        // and replays them to new subscribers

        // buffer 3 values for new subscribers
        const replaySubject$ = new ReplaySubject<number>(3);

        replaySubject$.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });

        replaySubject$.next(1);
        replaySubject$.next(2);
        replaySubject$.next(3);
        replaySubject$.next(4);

        replaySubject$.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        replaySubject$.next(4);

    }
}