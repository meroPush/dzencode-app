import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ProductsFilterPipe} from "./products-filter.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductsCardComponent } from './products-card/products-card.component';
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFilterPipe,
    ProductsCardComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule
  ]
})
export class ProductsModule { }
