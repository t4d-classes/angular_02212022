import { NgModule } from '@angular/core';

// ES2015 Module Import - JavaScript feature
import { BrowserModule } from '@angular/platform-browser';

import { ColorToolModule  } from './color-tool/color-tool.module';
import { CarToolModule  } from './car-tool/car-tool.module';

import { AppComponent } from './app.component';


// Angular Module
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColorToolModule,
    CarToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
