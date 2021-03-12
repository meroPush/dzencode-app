import { NgModule } from '@angular/core';
import {OrderByPipe} from "../pipes/order-by.pipe";

@NgModule({
  declarations: [
    OrderByPipe
  ],
  imports: [],
  exports: [
    OrderByPipe
  ]
})
export class SharedModule { }
