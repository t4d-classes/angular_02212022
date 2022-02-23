import { Injectable, Inject } from '@angular/core';

import { Car, NewCar } from '../models/cars';
import { ICarsService, CarsServiceToken } from '../models/carsService';

@Injectable({
  providedIn: 'root',
  // useFactory: (carsSvc: CarsService) => new CarToolStoreService(carsSvc),
  // deps: [CarsService],
})
export class CarToolStoreService {

  // application state: persisted data
  private _cars: Car[] = [];

  // application state: temporal data
  private _editCarId = -1;

  constructor(@Inject(CarsServiceToken) private carsSvc: ICarsService) { }

  public get cars() {
    return this._cars;
  }

  public get editCarId() {
    return this._editCarId;
  }

  public refreshCars() {
    this._cars = this.carsSvc.all();
  }

  public editCar(carId: number) {
    this._editCarId = carId;
  }

  public cancelCar() {
    this._editCarId = - 1;
  }

  public addCar(car: NewCar) {
    this._cars = this.carsSvc.append(car).all();
    this._editCarId = - 1;
  }

  public saveCar(car: Car) {
    this._cars = this.carsSvc.replace(car).all();
    this._editCarId = - 1;
  }

  public deleteCar(carId: number) {
    this._cars = this.carsSvc.remove(carId).all();
    this._editCarId = - 1;
  }
}
