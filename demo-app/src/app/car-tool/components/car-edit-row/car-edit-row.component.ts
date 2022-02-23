import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../models/cars';

@Component({
  selector: '.app-car-edit-row',
  templateUrl: './car-edit-row.component.html',
  styleUrls: ['./car-edit-row.component.css']
})
export class CarEditRowComponent implements OnInit {

  carForm!: FormGroup;

  @Input()
  car!: Car;

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    // this.car // the parameter data in not available yet
  }

  ngOnInit(): void {

    this.carForm = this.fb.group({
      make: this.car.make,
      model: this.car.model,
      year: this.car.year,
      color: this.car.color,
      price: this.car.price,
    });

  }

  doSaveCar() {

    this.saveCar.emit({
      ...this.carForm.value,
      id: this.car.id,
    });

  }

}
