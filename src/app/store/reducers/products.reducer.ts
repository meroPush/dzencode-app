import {Action, createReducer, on} from "@ngrx/store";
import {getProductsError, getProductsPending, getProductsSuccess} from "../actions/products.actions";
import {IProduct} from "../../interfaces/products.interface";

const initialState: IProduct[] = [];

const reducer = createReducer(
  initialState,
  on(getProductsPending, (state: IProduct[]) => {
    return [...state];
  }),
  on(getProductsSuccess, (state: IProduct[], {payload}) => {
    return [...state, ...payload];
  }),
  on(getProductsError, (state: IProduct[]) => {
    return [...state];
  })
)

export function productsReducer(state: IProduct[], action: Action): any {
  return reducer(state, action);
}
