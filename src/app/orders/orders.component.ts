import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {IOrder, IOrderProduct} from "../interfaces/orders.interface";
import {Store} from "@ngrx/store";
import {IRootState} from "../interfaces/store.interface";
import {getOrdersPending, removeOrder} from "../store/actions/orders.actions";
import {selectAllOrders, selectOrderTotal} from "../store/selectors/orders.selectors";
import {selectRouteParam} from "../store/selectors/router.selectors";
import {takeUntil} from "rxjs/operators";
import {IProductPrice} from "../interfaces/products.interface";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  orders$: Observable<IOrder[]> = this.store.select(selectAllOrders);
  ordersTotal$: Observable<number> = this.store.select(selectOrderTotal);
  showDetails: boolean;
  selectOrder: number;

  constructor(
    private readonly store: Store<IRootState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getOrdersPending());
    this.store.select(selectRouteParam('id')).pipe(
      takeUntil(this.destroy$)
    ).subscribe((id) => {
      this.selectOrder = +id;
      this.showDetails = !!id;
    })
  }

  getTotalProducts(products: IOrderProduct[]): number {
    return products.reduce((count: number, product: IOrderProduct) => {
      return (count += product.count);
    }, 0)
  }

  getTotalPrice(products: IOrderProduct[]): IProductPrice[] {
    let uah = 0;
    let usd = 0;

    products.forEach((product) => {
      const count = product.count;

      product.price.forEach((price) => {
        if (price.symbol === 'UAH') {
          uah += price.value * count;
        }
        if (price.symbol === 'USD') {
          usd += price.value * count;
        }
      })
    })

    return [
      {
        value: uah,
        symbol: 'UAH',
        isDefault: 1
      },
      {
        value: usd,
        symbol: 'USD',
        isDefault: 0
      }
    ]
  }

  removeOrder(order: IOrder): void {
    this.store.dispatch(removeOrder({order}))
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
