import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IState} from "../../interfaces/store.interface";
import {IProduct} from "../../interfaces/products.interface";

export const selectProducts = createFeatureSelector<IState, IProduct[]>('products');

export const productsFilter = createSelector(
  selectProducts,
  (products: IProduct[], type: string = '') => products.filter(product => {
    if (!type) {
      return true;
    }
    return  product.type.toLowerCase() === type.toLowerCase();
  })
);

export const productsTypes = createSelector(
  selectProducts,
  (products: IProduct[]) => {
    return [...products.reduce(
      (acc: Set<string>, product) => acc.add(product.type),
      new Set()
    )] as string[];
  }
)
