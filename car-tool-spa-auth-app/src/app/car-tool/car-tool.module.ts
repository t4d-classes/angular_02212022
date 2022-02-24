import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarToolRoutingModule } from './car-tool-routing.module';
import { CarHomeComponent } from './components/car-home/car-home.component';



@NgModule({
  declarations: [
    CarHomeComponent
  ],
  imports: [
    CommonModule,
    CarToolRoutingModule
  ]
})
export class CarToolModule { }
