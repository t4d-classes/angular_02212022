import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ConsoleLoggerService } from '../shared/services/console-logger.service';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';



@NgModule({
  declarations: [
    CarHomeComponent,
    CarFormComponent,
    CarTableComponent,
    CarViewRowComponent,
    CarEditRowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
   
  ],
  exports: [
    CarHomeComponent,
  ],
})
export class CarToolModule { }
