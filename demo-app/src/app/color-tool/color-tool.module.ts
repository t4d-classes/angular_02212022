import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { ColorToolRoutingModule } from './color-tool-routing.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { ColorNameListItemComponent } from './components/color-name-list-item/color-name-list-item.component';



@NgModule({
  declarations: [
    ColorHomeComponent,
    ColorFormComponent,
    ColorNameListItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ColorToolRoutingModule,
  ],
  exports: [
    ColorHomeComponent,
  ]
})
export class ColorToolModule { }
