import {createAction, props} from '@ngrx/store';
import {IProduct} from "../../interfaces/products.interface";

export const getProductsPending = createAction('[Products module] pending products from server');
export const getProductsSuccess = createAction('[Products module] get products from server', props<{payload: IProduct[]}>());
export const getProductsError = createAction('[Products module] error when retry products from server');
