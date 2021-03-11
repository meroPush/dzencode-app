import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../interfaces/products.interface";

@Pipe({
  name: 'productsFilter',
  pure: true
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], type: string = ''): IProduct[] {
    let result: IProduct[] = products;

    if (!type) {
      return result;
    }

    return result.filter((product: IProduct) => {
      return product.type.toLowerCase() === type.toLowerCase();
    });
  }
}
