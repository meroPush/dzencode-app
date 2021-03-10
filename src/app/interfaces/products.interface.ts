export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: IProductPrice[];
  order: number;
  date: string;
}

export interface IProductPrice {
  value: number;
  symbol: string;
  isDefault: number;
}
