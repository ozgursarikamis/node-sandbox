import { interval } from 'rxjs';
import { take, map, combineAll, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

export class CombineAllSamples {
    public static run() {
        // this.sample1();
        this.sample2_eCommerce();
    }

    // combineAll is deprecated. Use combineLatestAll instead.
    private static sample1(): void {

        const source$ = interval(1000).pipe(take(2));
        const example$ = source$.pipe(
            map(val => {
                return interval(1000).pipe(
                    map(i => `Result (${val}) (${i})`),
                    take(5)
                );
            })
        );

        example$.pipe(combineAll()).subscribe(console.log);
    }

    private static sample2_eCommerce(): void {
        const productIds = [1, 2, 3];

        const observables = productIds.map(id => 
            of(id).pipe(
              map(productId => {
                return this.getProductDetails$(productId).pipe(
                  combineAll(),
                  map(details => ({ productId, details }))
                );
              }),
              combineAll(),
              map(([product, details]) => {
                return this.getProductReviews$(product.productId).pipe(
                  combineAll(),
                  map(reviews => ({ ...product, reviews }))
                );
              }),
              combineAll()
            )
          );

        const combined$ = of(...observables).pipe(combineAll());
        combined$.subscribe(console.log);
    }

    // Simulate HTTP requests
    private static getProductDetails$(productId: number): Observable<string> {
        return of(`Details for product: ${productId}`).pipe(delay(1000));
    }
    private static getProductReviews$(productId: number): Observable<string> {
        return of(`Reviews for product: ${productId}`).pipe(delay(2000));
    }
}