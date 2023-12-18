# Reactive Javascript Extensions: RxJS

## What are differences between `Promise` and `Observable`?

| Observable                      | Promise                                                           |
|---------------------------------|-------------------------------------------------------------------|
| Declarative                     | Eager                                                             |
| Can be cancelled                | Cannot be cancelled                                               |
| Emits multiple values over time | Emits a single value at a time                                    |
| Provides chaining operators     | Doesn’t provide chaining operators (uses only `.then()` clause    |

## How do you handle errors with RxJS?

You can handle errors with `catch()` operator.

```typescript
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const source = of('a', 'b', 1, 'd');

const example = source.pipe(
  map(x => x.toUpperCase()),
  catchError(error => of('error found'))
);

example.subscribe({
  next: value => console.log(value),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});
```

## What is the difference between `Subject` and `Observable`?

`Subject` is a special type of `Observable` that allows values to be multicasted to many Observers.

While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

There are two types of subjects:

- `Subject`: You are able to get the value once you subscribe to it, not before.

- `BehaviorSubject`: It is useful for representing `values over time`. For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.
  - > It stores the latest value emitted to its consumers

- `ReplaySubject`: It records multiple values from the Observable execution and replays them to new subscribers.

- `AsyncSubject`: It only returns the last value of the Observable execution.


## How does an `Observable` complete?

An `Observable` can complete in two ways:

- It emits a `complete` notification to all of its subscribers.
- It emits an `error` notification to all of its subscribers.

## What is the significance of `complete()` method?

The `complete()` method notifies the `Observable` that <u>it should tear down its internal state</u> and cancel any other work that it is doing.

## How is it different than `unsubscribe()` method?

The `unsubscribe()` method is specifically designed for canceling work that the `Observable` setup. 

> It does not instruct the `Observable` to teardown its internal state and cancel its other work.

## What is `concat()` operator?

The `concat()` operator is used to concatenate the output of multiple Observables so that they act like a single Observable, with all of the values emitted by the first Observable being emitted before any of the values emitted by the second Observable (and so on, if there are more than two).

```typescript
import { of, concat } from 'rxjs';

const sourceOne = of(1, 2, 3);
const sourceTwo = of(4, 5, 6);
const example = concat(sourceOne, sourceTwo);

example.subscribe({
  next: value => console.log(value),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});
```

> Might be useful when you want to wait for a request to finish. e.g. posting multiple requests to a server.

## What is `concatMap()` operator?

The `concatMap()` operator is used to map each value to an Observable, then flatten all of these inner Observables using `concatAll()` operator.

It's helpful to avoid having nested observables.

```typescript
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const source = of(1, 2, 3);

const example = source.pipe(
  concatMap(value => of(value * 2))
);

example.subscribe({
  next: value => console.log(value),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});
```

## What is `merge()` operator?

The `merge()` operator is used to combine multiple Observables into one by merging their emissions.

```typescript
import { of, merge } from 'rxjs';

const sourceOne = of(1, 2, 3);
const sourceTwo = of(4, 5, 6);

const example = merge(sourceOne, sourceTwo);

example.subscribe({
  next: value => console.log(value),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});
```

## What is `mergeMap()` operator?

The `mergeMap()` operator is used to map each value to an Observable, then flatten all of these inner Observables using `mergeAll()` operator.


> NOTE: `mergeMap()` handles things in parallel, whereas `concatMap()` handles things in series.


## `exhaustAll()` Operator

The `exhaustAll()` operator is used to ignore all subsequent Observables until the current one is completed.

```typescript
import { of, interval } from 'rxjs';
import { exhaustAll, take } from 'rxjs/operators';

const source = interval(1000).pipe(take(2));
const example = source.pipe(
  exhaustAll()
);

example.subscribe({
  next: value => console.log(value),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});
```


> These operators are deprecated as of `v6.5`
>
> - merge
> - from
> - of
> - concat
> - combineLatest
> - startWith
> - endWith
> 
> &nbsp;