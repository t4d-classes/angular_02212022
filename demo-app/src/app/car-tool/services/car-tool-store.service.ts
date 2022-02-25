import { Injectable, Inject } from '@angular/core';
import { switchMap } from 'rxjs';

import { Car, NewCar } from '../models/cars';
import { ICarsService, CarsServiceToken } from '../models/carsService';

@Injectable({
  providedIn: 'root',
})
export class CarToolStoreService {

  private _cars: Car[] = [];

  private _editCarId = -1;

  constructor(@Inject(CarsServiceToken) private carsSvc: ICarsService) { }

  public get cars() {
    return this._cars;
  }

  public get editCarId() {
    return this._editCarId;
  }

  public refreshCars() {
    this.carsSvc.all().subscribe({
      next: cars => this._cars = cars,
    });
  }

  public editCar(carId: number) {
    this._editCarId = carId;
  }

  public cancelCar() {
    this._editCarId = - 1;
  }

  public addCar(car: NewCar) {
    this.carsSvc
      .append(car)
      .pipe(switchMap(() => this.carsSvc.all()))
      .subscribe({
        next: cars => this._cars = cars,
      });
    this._editCarId = - 1;
  }

  public saveCar(car: Car) {
    this.carsSvc
      .replace(car)
      .pipe(switchMap(() => this.carsSvc.all()))
      .subscribe({
        next: cars => this._cars = cars,
      });
    this._editCarId = - 1;
  }

  public deleteCar(carId: number) {
    this.carsSvc
      .remove(carId)
      .pipe(switchMap(() => this.carsSvc.all()))
      .subscribe({
        next: cars => this._cars = cars,
      });
    this._editCarId = - 1;
  }
}
