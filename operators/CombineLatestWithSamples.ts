import { fromEvent, combineLatestWith, map } from 'rxjs';

export class CombineLatestWithSamples {
    public static Run() {
        const input1 = document.createElement('input');
        const input2 = document.createElement('input');

        document.appendChild(input1);
        document.appendChild(input2);

        // get stream of changes:
        const input1Changes$ = fromEvent(input1, 'change');
        const input2Changes$ = fromEvent(input2, 'change');

        input1Changes$.pipe(
            combineLatestWith(input2Changes$),
            map(([event1, event2]) => {
                return (<HTMLInputElement>event1.target).value + " - " + (<HTMLInputElement>event2.target).value;
            })
        )
    }
}