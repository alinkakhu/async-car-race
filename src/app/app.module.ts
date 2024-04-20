import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarageRoutingModule } from './garage/garage-routing.module';
import { WinnersRoutingModule } from './winners/winners-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GarageRoutingModule,
    WinnersRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
