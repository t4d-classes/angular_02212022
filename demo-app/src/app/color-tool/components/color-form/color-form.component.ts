import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NewColor } from '../../models/colors';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = "Submit Color";

  @Output()
  submitColor = new EventEmitter<NewColor>();

  colorForm!: FormGroup;

  get nameError() {

    // console.log(this.colorForm)

    return this.colorForm.get('name')!.errors;

    // // guard
    // if (this.colorForm.get('name')!.errors) {
    //   // safely use the thing checked for by the guard
    //   return this.colorForm.get('name');
    // } else {
    //   return false;
    // }
  }

  get hexcodeErrorRequired() {

    console.log(this.colorForm.get('hexcode')!.errors);

    // Pure JS
    // return this.colorForm.get('hexcode').errors?.required;

    // More Involved with TypeScript
    const errors = this.colorForm.get('hexcode')?.errors;
    return errors && errors['required'];
  }

  get hexcodeErrorMinlength() {

    console.log(this.colorForm.get('hexcode')!.errors);

    // Pure JS
    // return this.colorForm.get('hexcode').errors?.minlength;

    // More Involved with TypeScript
    const errors = this.colorForm.get('hexcode')?.errors;
    return errors && errors['minlength'];
  }

  get showValidationSummary() {
    return this.nameError
      || this.hexcodeErrorRequired
      || this.hexcodeErrorMinlength;
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.colorForm = this.fb.group({
      name: ['', { validators: [Validators.required] } ],
      hexcode: ['', { validators: [Validators.required, Validators.minLength(6) ] } ],
    });

  }

  doSubmitColor() {
    this.submitColor.emit(this.colorForm.value);
  }

}
