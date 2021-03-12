import { NgModule } from '@angular/core';
import {OrderByPipe} from "../pipes/order-by.pipe";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    OrderByPipe,
    DialogConfirmComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    OrderByPipe,
    MatDialogModule,
    DialogConfirmComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
