import {Inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {catchError, map, switchMap} from "rxjs/operators";
import {API_URL_TOKEN} from "../../app.config";
import {IResponse} from "../../interfaces/app.interface";
import {of} from "rxjs";
import {getOrdersError, getOrdersPending, getOrdersSuccess} from "../actions/orders.actions";
import {IOrder} from "../../interfaces/orders.interface";

@Injectable()
export class OrdersEffects {
  constructor(
    @Inject(API_URL_TOKEN) private apiUrl: string,
    private actions$: Actions,
    private http: HttpClient
  ) {}

  getOrders$ = createEffect(() => this.actions$.pipe(
    ofType(getOrdersPending),
    switchMap(() => this.http.get<IResponse<IOrder[]>>(this.apiUrl + '/api/orders').pipe(
      map((data) => getOrdersSuccess({payload: data.payload})),
      catchError(() => of(getOrdersError()))
    ))
  ));
}
