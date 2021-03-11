import {Inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {getProductsError, getProductsPending, getProductsSuccess} from "../actions/products.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {API_URL_TOKEN} from "../../app.config";
import {IResponse} from "../../interfaces/app.interface";
import {IProduct} from "../../interfaces/products.interface";
import {of} from "rxjs";

@Injectable()
export class ProductsEffects {
  constructor(
    @Inject(API_URL_TOKEN) private apiUrl: string,
    private actions$: Actions,
    private http: HttpClient
  ) {}

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    switchMap(() => this.http.get<IResponse<IProduct[]>>(this.apiUrl + '/api/products').pipe(
      map((data) => getProductsSuccess({payload: data.payload})),
      catchError(() => of(getProductsError()))
    ))
  ));
}
