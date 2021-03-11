import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getProductsPending} from "../store/actions/products.actions";
import {Observable, Subject} from "rxjs";
import {IProduct} from "../interfaces/products.interface";
import {IState} from "../interfaces/store.interface";
import {FormBuilder, FormGroup} from "@angular/forms";
import {productsFilter, productsTypes} from "../store/selectors/products.selectors";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  public products$: Observable<IProduct[]>;
  public filterFg: FormGroup;
  public productsTypes$: Observable<string[]>;

  constructor(
    private readonly store: Store<IState>,
    private formBuilder: FormBuilder,
  ) {
    this.products$ = this.store.select('products');
    this.productsTypes$ = this.store.select(productsTypes);
  }

  ngOnInit(): void {
    this.store.dispatch(getProductsPending());

    this.filterFg = this.formBuilder.group({
      type: ['']
    }, {
      updateOn: 'change'
    });

    this.filterFg.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.products$ = this.store.select(productsFilter, data.type);
    })
  }

  deleteProduct(product: IProduct): void {
    // TODO: implement deletion
    alert(`Remove product by id ${product.id}`);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
