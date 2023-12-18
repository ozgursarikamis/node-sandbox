import { SubjectSamples } from "./SubjectSamples";

export class SubjectAnotherSubscriber {
    constructor() {
        const subjectSamples = new SubjectSamples();
        subjectSamples.subject$.subscribe({
            next: (v) => console.log(`observer SubjectAnotherSubscriber: ${v}`)
        });

        subjectSamples.subject$.next(111);
    }
}