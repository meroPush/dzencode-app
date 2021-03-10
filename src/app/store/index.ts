import {productsReducer} from "./reducers/products.reducer";
import {ProductsEffects} from "./effects/products.effects";

export const reducers: any = {
  products: productsReducer
}

export const effects: any = [
  ProductsEffects
]
