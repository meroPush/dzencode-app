import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {IOrder, IOrderProduct} from "../../interfaces/orders.interface";
import {Store} from "@ngrx/store";
import {IRootState} from "../../interfaces/store.interface";
import {removeProductFromOrder, selectOrder} from "../../store/actions/orders.actions";
import {selectOrderById, selectOrderProducts} from "../../store/selectors/orders.selectors";
import {takeUntil} from "rxjs/operators";
import {DialogConfirmComponent} from "../../shared/dialog-confirm/dialog-confirm.component";
import {MatDialog} from "@angular/material/dialog";

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
    private readonly store: Store<IRootState>,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.store.select(selectOrderById).pipe(
      takeUntil(this.destroy$)
    ).subscribe((order: IOrder) => {
      this.order = order;
    })
  }

  removeProductFromOrder($event, product: IOrderProduct) {
    $event.stopPropagation();

    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: {
        title: 'Вы уверены, что хотите удалить этот товар?',
        data: product
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(removeProductFromOrder({order: this.order, product}))
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
