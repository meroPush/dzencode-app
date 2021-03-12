import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { SidebarComponent } from './sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import {effects, reducers} from "./store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {
  API_URL,
  API_URL_TOKEN,
  IS_PRODUCTION,
  IS_PRODUCTION_TOKEN
} from "./app.config";
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {SocketIoModule} from "ngx-socket-io";

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
    SocketIoModule.forRoot({
      url: API_URL,
    })
  ],
  providers: [
    {
      provide: IS_PRODUCTION_TOKEN,
      useValue: IS_PRODUCTION
    },
    {
      provide: API_URL_TOKEN,
      useValue: API_URL
    },
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
