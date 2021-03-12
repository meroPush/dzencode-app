import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IOrdersState, IRootState} from "../../interfaces/store.interface";
import {ordersAdapter} from "../reducers/orders.reducer";
import {
  selectCurrentRoute,
  selectFragment,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
} from "./router.selectors"

export const getSelectedOrderId = (state: IOrdersState) => state.selectedOrderId;

export const selectOrderState = createFeatureSelector<IRootState, IOrdersState>('orders');

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = ordersAdapter.getSelectors();

export const selectOrderIds = createSelector(
  selectOrderState,
  selectIds
);
export const selectOrderEntities = createSelector(
  selectOrderState,
  selectEntities
);
export const selectAllOrders = createSelector(
  selectOrderState,
  selectAll
);
export const selectOrderTotal = createSelector(
  selectOrderState,
  selectTotal
);
export const selectCurrentOrderId = createSelector(
  selectOrderState,
  getSelectedOrderId
);
export const selectCurrentOrder = createSelector(
  selectOrderEntities,
  selectCurrentOrderId,
  (orderEntities, id) => orderEntities[id]
);
export const selectOrderProducts = createSelector(
  selectOrderEntities,
  selectRouteParam('id'),
  (orderEntities, id) => {
    return orderEntities[id] ? orderEntities[id].products : [];
  }
)
export const selectOrderById = createSelector(
  selectOrderEntities,
  selectRouteParam('id'),
  (orderEntities, id) => orderEntities[id]
)
