import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Car, NewCar } from '../models/cars';
import { ICarsService } from '../models/carsService';

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class CarsService implements ICarsService {

  constructor(private http: HttpClient) { }

  public all() {
    return this.http.get<Car[]>(this.collectionUrl());
  }

  public append(car: NewCar) {
    return this.http.post<Car>(this.collectionUrl(), car);
  }

  public replace(car: Car) {
    return this.http.put<void>(this.memberUrl(car.id), car);
  }

  public remove(carId: number) {
    return this.http.delete<void>(this.memberUrl(carId));
  }

  private collectionUrl() {
    return environment.apiUrl + "/cars";
  }

  private memberUrl(carId: number) {
    return `${this.collectionUrl()}/${encodeURIComponent(carId)}`;
  }
}
