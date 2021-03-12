import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import {OrderCardComponent} from "./order-card/order-card.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: ':id',
        component: OrderCardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
