import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageComponent } from './garage-component/garage-component.component';
import { GarageRoutingModule } from './garage-routing.module';



@NgModule({
  declarations: [
    GarageComponent
  ],
  imports: [
    CommonModule,
    GarageRoutingModule
  ]
})
export class GarageModule { }
