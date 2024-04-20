import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersComponent } from './winners/winners.component';
import { WinnersRoutingModule } from './winners-routing.module';



@NgModule({
  declarations: [
    WinnersComponent
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule

  ]
})
export class WinnersModule { }
