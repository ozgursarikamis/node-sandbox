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
}