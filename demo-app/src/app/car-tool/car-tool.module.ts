import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarFormComponent } from './components/car-form/car-form.component';



@NgModule({
  declarations: [
    CarHomeComponent,
    CarFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CarHomeComponent,
  ],
})
export class CarToolModule { }
