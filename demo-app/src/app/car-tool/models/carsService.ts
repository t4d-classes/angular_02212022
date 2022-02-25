import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { Car, NewCar } from './cars';

export interface ICarsService {
  all(): Observable<Car[]>;
  append(car: NewCar): Observable<Car>;
  replace(car: Car): Observable<void>;
  remove(carId: number): Observable<void>;
}

export const CarsServiceToken = new InjectionToken<ICarsService>('cars service');
