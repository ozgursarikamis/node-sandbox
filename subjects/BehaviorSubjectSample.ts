import { BehaviorSubject } from "rxjs";

export class BehaviorSubjectSample {
    public static Run() {
        // It stores the latest value emitted to its consumers
        const behaviorSubject$ = new BehaviorSubject<number>(0);
        behaviorSubject$.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });

        behaviorSubject$.next(1);
        behaviorSubject$.next(2);

        console.log('observerB subscribed');
        // The second Observer receives the value 2 
        // even though it subscribed after the value 2 was sent.
        behaviorSubject$.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        behaviorSubject$.next(3);
    }
}