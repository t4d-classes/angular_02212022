import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CarsServiceToken } from './models/carsService';
import { CarsService } from './services/cars.service';
import { CarToolStoreService } from './services/car-tool-store.service';
import { SharedModule } from '../shared/shared.module';
import { CarToolRoutingModule } from '../car-tool/car-tool-routing.module';

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
    HttpClientModule,
    SharedModule,
    CarToolRoutingModule,
  ],
  providers: [
    { provide: CarsServiceToken, useClass: CarsService, },
    CarToolStoreService,
  ],
  exports: [
    CarHomeComponent,
  ],
})
export class CarToolModule { }
