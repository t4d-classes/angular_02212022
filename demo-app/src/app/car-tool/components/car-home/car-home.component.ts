import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ConsoleLoggerService } from '../../../shared/services/console-logger.service';
import { Car, NewCar } from '../../models/cars';
import { CarToolStoreService } from '../../services/car-tool-store.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
  providers: [
    { provide: ConsoleLoggerService, useFactory: () => new ConsoleLoggerService('Car Tool >') }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarHomeComponent implements OnInit {

  get cars$() {
    return this.carToolStoreSvc.cars$ // just the plain value
  }

  get editCarId$() {
    return this.carToolStoreSvc.editCarId$
  }  

  constructor(
    private carToolStoreSvc: CarToolStoreService,
    // private logSvc: ConsoleLoggerService,
  ) { }

  ngOnInit(): void {
    // this.logSvc.log("car home");
    this.carToolStoreSvc.refreshCars();
  }

  doEditCar(carId: number) {
    this.carToolStoreSvc.editCar(carId);
  }

  doCancelCar() {
    this.carToolStoreSvc.cancelCar();
  }

  doAddCar(car: NewCar) {
    this.carToolStoreSvc.addCar(car);
  }

  doSaveCar(car: Car) {
    this.carToolStoreSvc.saveCar(car);
  }

  doDeleteCar(carId: number) {
    this.carToolStoreSvc.deleteCar(carId);
  }


}
