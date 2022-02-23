import { Injectable } from '@angular/core';

import { Car, NewCar } from '../models/cars';
import { ICarsService } from '../models/carsService';

@Injectable({
  providedIn: 'root',
})
export class CarsService implements ICarsService {

  private _cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2021, color: 'blue', price: 120000 },
  ];

  constructor() { }

  public all() {
    return [ ...this._cars ];
  }

  public append(car: NewCar) {
    this._cars = [
      ...this._cars,
      {
        ...car,
        id: Math.max(...this._cars.map(c => c.id), 0) + 1,
      },
    ];
    return this;
  }

  public replace(car: Car) {
    const newCars = [...this._cars];
    const carIndex = this._cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    this._cars = newCars;
    return this;
  }

  public remove(carId: number) {
    this._cars = this._cars.filter(c => c.id !== carId);
    return this;
  }
}
