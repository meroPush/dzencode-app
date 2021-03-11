import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IProduct} from "../../interfaces/products.interface";

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent {
  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  @Output()
  public delete = new EventEmitter();

  public deleteProduct(): void {
    this.delete.emit(this.product);
  }
}
