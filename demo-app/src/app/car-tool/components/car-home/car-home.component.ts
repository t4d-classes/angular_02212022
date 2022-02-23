import { Component, OnInit, Input } from '@angular/core';

import { Car, NewCar } from '../../models/cars';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  // all inputs without exception should be treated as immutable
  @Input() // parameter, that should never, ever, be changed
  headerText = "Car Tool";

  // application state - data that changes over time (model data)

  // application state: persisted data
  cars: Car[] = [];

  // application state: temporal data
  editCarId = -1;

  constructor(private carsSvc: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsSvc.all();
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doAddCar(car: NewCar) {
    this.cars = this.carsSvc.append(car).all();
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    this.cars = this.carsSvc.replace(car).all();
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.cars = this.carsSvc.remove(carId).all();
    this.editCarId = -1;
  }


}
