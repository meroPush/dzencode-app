import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderCardComponent } from './order-card/order-card.component';
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    OrdersComponent,
    OrderCardComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    MatIconModule
  ]
})
export class OrdersModule { }
