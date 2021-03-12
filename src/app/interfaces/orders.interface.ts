import {IProduct} from "./products.interface";

export interface IOrderProduct extends IProduct {
  count: number;
}

export interface IOrder {
  id: number;
  title: string;
  date: string;
  description: string;
  products: IOrderProduct[];
}
