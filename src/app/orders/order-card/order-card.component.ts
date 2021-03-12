import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {IOrder, IOrderProduct} from "../../interfaces/orders.interface";
import {Store} from "@ngrx/store";
import {IRootState} from "../../interfaces/store.interface";
import {removeProductFromOrder, selectOrder} from "../../store/actions/orders.actions";
import {selectOrderById, selectOrderProducts} from "../../store/selectors/orders.selectors";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  order: IOrder;
  products$: Observable<IOrderProduct[]> = this.store.select(selectOrderProducts);

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly store: Store<IRootState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectOrderById).pipe(
      takeUntil(this.destroy$)
    ).subscribe((order: IOrder) => {
      this.order = order;
    })
  }

  removeProductFromOrder(product: IOrderProduct) {
    this.store.dispatch(removeProductFromOrder({order: this.order, product}))
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
