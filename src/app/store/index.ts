import {productsReducer} from "./reducers/products.reducer";
import {ProductsEffects} from "./effects/products.effects";
import {ordersReducer} from "./reducers/orders.reducer";
import {OrdersEffects} from "./effects/orders.effects";
import {routerReducer} from "@ngrx/router-store";

export const reducers: any = {
  products: productsReducer,
  orders: ordersReducer,
  router: routerReducer
}

export const effects: any = [
  ProductsEffects,
  OrdersEffects
]
