import { InjectionToken } from '@angular/core';

import { Car, NewCar } from './cars';

export interface ICarsService {
  all(): Car[];
  append(car: NewCar): ICarsService;
  replace(car: Car): ICarsService;
  remove(carId: number): ICarsService;
}

export const CarsServiceToken = new InjectionToken<ICarsService>('cars service');
