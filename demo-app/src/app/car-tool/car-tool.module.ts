import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarTableComponent } from './components/car-table/car-table.component';



@NgModule({
  declarations: [
    CarHomeComponent,
    CarFormComponent,
    CarTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    CarHomeComponent,
  ],
})
export class CarToolModule { }
