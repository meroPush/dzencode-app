import {IProduct} from "./products.interface";
import {EntityState} from "@ngrx/entity";
import {IOrder} from "./orders.interface";

export interface IOrdersState extends EntityState<IOrder> {
  selectedOrderId: number | null;
}

export interface IRootState {
  products: IProduct[];
  orders: IOrdersState
}
