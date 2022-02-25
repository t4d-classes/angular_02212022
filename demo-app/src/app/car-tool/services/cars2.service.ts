import { of } from 'rxjs';

import { Car, NewCar } from '../models/cars';
import { ICarsService } from '../models/carsService';

let cars: Car[] = [
  { id: 1, make: 'Chevrolet', model: 'Silverado', year: 2019, color: 'red', price: 45000 },
  { id: 2, make: 'Audi', model: 'A8', year: 2021, color: 'blue', price: 120000 },
];

export const cars2: ICarsService = {
  all() {
    return of([...cars]);
  },
  append(car: NewCar) {
    const newCar = {
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    };
    cars = [
      ...cars,
      newCar,
    ];
    return of(newCar);
  },
  replace(car: Car) {
    const newCars = [...cars];
    const carIndex = cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    cars = newCars;
    return of();
  },
  remove(carId: number) {
    cars = cars.filter(c => c.id !== carId);
    return of();
  },
}