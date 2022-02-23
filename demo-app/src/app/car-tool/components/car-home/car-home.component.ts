import { Component, OnInit, Input } from '@angular/core';

import { Car, NewCar } from '../../models/cars';

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
  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2021, color: 'blue', price: 120000 },
  ];

  // application state: temporal data
  editCarId = -1;

  constructor() { }

  ngOnInit(): void {
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doAddCar(car: NewCar) {
    this.cars = [
      ...this.cars,
      {
        ...car,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      },
    ];
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    const newCars = [...this.cars];
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    this.cars = newCars;
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    this.editCarId = -1;
  }


}
