import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {getProductsPending} from "../store/actions/products.actions";
import {Observable} from "rxjs";
import {IProduct} from "../interfaces/products.interface";
import {IState} from "../interfaces/store.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]> = this.store.select('products');

  constructor(
    private readonly store: Store<IState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsPending());
  }
}
