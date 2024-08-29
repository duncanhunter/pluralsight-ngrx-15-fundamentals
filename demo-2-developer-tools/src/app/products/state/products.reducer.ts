import { createAction, createReducer, on } from '@ngrx/store';
import { ProductsApiAction, ProductsPageActions } from './products.actions';
import { Product } from '../product.model';

export interface ProductsState {
  showProductCode: boolean;
  loading: boolean;
  products: Product[];
}

const intitialState: ProductsState = {
  showProductCode: true,
  loading: false,
  products: []
};

export const productsReducer = createReducer(
  intitialState,
  on(ProductsPageActions.toggleShowProductCode, (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  })),
  on(ProductsPageActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
    products: []
  })),
  on(ProductsApiAction.productsLoadedSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  }))
);
