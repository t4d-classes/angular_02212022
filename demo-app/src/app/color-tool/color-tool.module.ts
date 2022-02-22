import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';



@NgModule({
  declarations: [
    ColorHomeComponent,
    ColorFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ColorHomeComponent,
  ]
})
export class ColorToolModule { }
