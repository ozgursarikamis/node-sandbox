import { AsyncSubject } from "rxjs";

export class AsyncSubjectSample {
    public static Run(): void {
        // It stores the last value emitted to its observers,
        // and only after the source Observable completes,
        // it will emit this value to all observers.

        const subject$ = new AsyncSubject<number>();

        subject$.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });

        subject$.next(1);
        subject$.next(2);
        subject$.next(3);
        subject$.next(4);

        subject$.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        subject$.next(5);
        subject$.complete(); // It will notify its observers about only the last value `5`
    }
}