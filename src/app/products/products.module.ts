import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ProductsFilterPipe} from "./products-filter.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductsCardComponent } from './products-card/products-card.component';
import {OrderByPipe} from "../pipes/order-by.pipe";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFilterPipe,
    ProductsCardComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class ProductsModule { }
