import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";
import { sumProducts } from "src/app/utils/sum-products";

export const selectProductState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
    selectProductState,
    (productsState) => productsState.products
)

export const selectProductsLoading = createSelector(
    selectProductState,
    (productsState) => productsState.loading
)

export const selectProductsShowProductCode = createSelector(
    selectProductState,
    (productsState) => productsState.showProductCode
)

export const selectProductsTotal = createSelector(
    selectProducts,
    sumProducts
)

