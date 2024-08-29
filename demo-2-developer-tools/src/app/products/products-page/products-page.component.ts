import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from '../products.service';
import {
  ProductsApiAction,
  ProductsPageActions,
} from '../state/products.actions';
import {
  selectProducts,
  selectProductsLoading,
  selectProductsShowProductCode,
  selectProductsTotal,
} from '../state/products.selector';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  products$ = this.store.select(selectProducts);
  total$ = this.store.select(selectProductsTotal);
  loading$ = this.store.select(selectProductsLoading);
  showProductCode$ = this.store.select(selectProductsShowProductCode);
  errorMessage = ''

  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.store.dispatch(ProductsPageActions.loadProducts());
    this.productsService.getAll().subscribe((products) => {
      this.store.dispatch(
        ProductsApiAction.productsLoadedSuccess({ products })
      );
    });
  }

  toggleShowProductCode() {
    this.store.dispatch(ProductsPageActions.toggleShowProductCode());
  }
}
