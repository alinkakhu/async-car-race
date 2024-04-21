import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageComponent } from './garage-component/garage-component.component';
import { GarageRoutingModule } from './garage-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GarageComponent
  ],
  imports: [
    CommonModule,
    GarageRoutingModule,
    HttpClientModule
  ]
})
export class GarageModule { }
