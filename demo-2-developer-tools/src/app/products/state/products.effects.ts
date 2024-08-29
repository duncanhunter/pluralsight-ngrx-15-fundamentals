import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, mergeMap, of } from 'rxjs';
import { ProductsService } from '../products.service';
import { ProductsApiAction, ProductsPageActions } from './products.actions';

@Injectable()
export class ProductEffects {



    constructor(
        private productsService: ProductsService,
        private actions$: Actions
    ) { }

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsPageActions.loadProducts),
            concatMap(() =>
                this.productsService.getAll().pipe(map((products) =>
                    ProductsApiAction.productsLoadedSuccess({ products })
                ))
            )
        )
    )
}
