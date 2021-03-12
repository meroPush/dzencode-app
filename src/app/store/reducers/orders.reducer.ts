import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {IOrder, IOrderProduct} from "../../interfaces/orders.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {IOrdersState} from "../../interfaces/store.interface";
import {
  getOrdersPending,
  getOrdersSuccess,
  removeOrder,
  removeProductFromOrder,
  selectOrder
} from "../actions/orders.actions";

export const ordersAdapter: EntityAdapter<IOrder> = createEntityAdapter<IOrder>({
  selectId: (order: IOrder) => order.id
})

export const ordersInitialState: IOrdersState = ordersAdapter.getInitialState({
  selectedOrderId: null,
});

const reducer = createReducer(
  ordersInitialState,
  on(getOrdersSuccess, (state: EntityState<IOrder>, {payload}) => {
    return ordersAdapter.setAll(payload, state);
  }),
  on(removeOrder, (state: EntityState<IOrder>, {order}) => {
    return ordersAdapter.removeOne(order.id, state);
  }),
  on(selectOrder, (state: IOrdersState, {payload}) => {
    return {...state, selectedOrderId: payload};
  }),
  on(removeProductFromOrder, (state: EntityState<IOrder>, {order, product}) => {
    const updatedOrder = {...order};
    const orderProducts = [...order.products];

    orderProducts.splice(orderProducts.findIndex((i) => i.id === product.id), 1);
    updatedOrder.products = orderProducts;

    return ordersAdapter.updateOne({id: order.id, changes: updatedOrder}, state)
  })
)

export function ordersReducer(state: IOrdersState | undefined, action: Action) {
  return reducer(state, action);
}
