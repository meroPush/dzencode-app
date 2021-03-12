import {createAction, props} from '@ngrx/store';
import {IOrder, IOrderProduct} from "../../interfaces/orders.interface";

export const getOrdersPending = createAction('[Orders module] pending orders from server');
export const getOrdersSuccess = createAction('[Orders module] get orders from server', props<{payload: IOrder[]}>());
export const getOrdersError = createAction('[Orders module] error when retry orders from server');
export const selectOrder = createAction('[Orders module] select order', props<{payload: number}>());
export const removeProductFromOrder = createAction('[Orders module] remove product from order', props<{order: IOrder, product: IOrderProduct}>());
export const removeOrder = createAction('[Orders module] remove order', props<{order: IOrder}>());
