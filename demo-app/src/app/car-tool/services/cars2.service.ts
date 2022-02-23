import { Car, NewCar } from '../models/cars';
import { ICarsService } from '../models/carsService';



let cars: Car[] = [
  { id: 1, make: 'Chevrolet', model: 'Silverado', year: 2019, color: 'red', price: 45000 },
  { id: 2, make: 'Audi', model: 'A8', year: 2021, color: 'blue', price: 120000 },
];


export const cars2: ICarsService =  {
  all() {
    return [ ...cars ];
  },
  append(car: NewCar) {
    cars = [
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ];
    return this;
  },
  replace(car: Car) {
    const newCars = [...cars];
    const carIndex = cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    cars = newCars;
    return this;
  },
  remove(carId: number) {
    cars = cars.filter(c => c.id !== carId);
    return this;
  },
}