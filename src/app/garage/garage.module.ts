import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageComponent } from './garage-component/garage-component.component';
import { GarageRoutingModule } from './garage-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { carMoveRightAnimation } from './car/car.animation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    GarageComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    GarageRoutingModule,
    HttpClientModule

  ]
})
export class GarageModule { }
