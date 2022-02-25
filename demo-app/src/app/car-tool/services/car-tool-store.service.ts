import { Injectable, Inject } from '@angular/core';
import { switchMap, BehaviorSubject } from 'rxjs';

import { Car, NewCar } from '../models/cars';
import { ICarsService, CarsServiceToken } from '../models/carsService';

@Injectable()
export class CarToolStoreService {

  private _cars$ = new BehaviorSubject<Car[]>([]);
  private _editCarId$ = new BehaviorSubject<number>(-1);

  // private _cars$: Car[] = [];
  // private _editCarId$: number = -1;

  constructor(@Inject(CarsServiceToken) private carsSvc: ICarsService) {
    console.log("created car tool store service");
  }

  public get cars$() {
    return this._cars$;
  }

  public get editCarId$() {
    return this._editCarId$;
  }

  public refreshCars() {
    this.carsSvc.all().subscribe({
      next: cars => {
        console.log(cars)
        this._cars$.next(cars);
      },
      // next: cars => {
      //   console.log(cars)
      //   this._cars$ = cars;
      // },
    });
  }

  public editCar(carId: number) {
    this._editCarId$.next(carId);
    // this._editCarId$ = carId;
  }

  public cancelCar() {
    this._editCarId$.next(-1);
    // this._editCarId$ = -1;
  }

  public addCar(car: NewCar) {
    this.carsSvc
      .append(car)
      .pipe(switchMap(() => this.carsSvc.all()))
      .subscribe({
        next: cars => {
          this._cars$.next(cars);
          this._editCarId$.next(-1);
          // this._cars$ = cars;
          // this._editCarId$ = -1;
        },
      });
  }

  public saveCar(car: Car) {
    this.carsSvc
      .replace(car)
      .pipe(switchMap(() => this.carsSvc.all()))
      .subscribe({
        next: cars => {
          this._cars$.next(cars);
          this._editCarId$.next(-1);
          // this._cars$ = cars;
          // this._editCarId$ = -1;
        },
      });
  }

  public deleteCar(carId: number) {
    this.carsSvc
      .remove(carId)
      .pipe(switchMap(() => this.carsSvc.all()))
      .subscribe({
        next: cars => {
          this._cars$.next(cars);
          this._editCarId$.next(-1);
          // this._cars$ = cars;
          // this._editCarId$ = -1;
        },
      });
  }
}
