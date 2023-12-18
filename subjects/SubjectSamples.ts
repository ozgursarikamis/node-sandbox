import { Subject } from 'rxjs';

export class SubjectSamples {
    public static Run(): void {
        const subject$ = new Subject<number>();
        subject$.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });

        subject$.next(999);

        subject$.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });
    }
    subject$: Subject<number> = new Subject<number>();

    // Sometimes the emitted value doesn't matter 
    // as much as the fact that a value was emitted.
    // For instance, the code below signals that one second has passed.
    static voidSubject(): void {
        const subject$ = new Subject<void>();
        subject$.subscribe({
            next: () => console.log(`One second has passed`),
        });
        // setInterval(() => subject$.next(), 1000);
    }
}