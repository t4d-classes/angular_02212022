import { Component, OnInit } from '@angular/core';

import { Car, NewCar } from '../../models/cars';
import { CarToolStoreService } from '../../services/car-tool-store.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  get cars() {
    return this.carToolStoreSvc.cars
  }

  get editCarId() {
    return this.carToolStoreSvc.editCarId
  }  

  constructor(private carToolStoreSvc: CarToolStoreService) { }

  ngOnInit(): void {
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
