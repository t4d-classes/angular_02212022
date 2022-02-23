import { NgModule } from '@angular/core';

// ES2015 Module Import - JavaScript feature
import { BrowserModule } from '@angular/platform-browser';

import { ColorToolModule  } from './color-tool/color-tool.module';
import { CarToolModule  } from './car-tool/car-tool.module';

import { CarsServiceToken } from './car-tool/models/carsService';
import { CarsService } from './car-tool/services/cars.service';
import { cars2 } from './car-tool/services/cars2.service';

import { AppComponent } from './app.component';


const someFlag = false;

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
  providers: [
    // CarsService, // shorthand for the config below
    // {
    //   provide: CarsService, // contract, injection token
    //   useClass: CarsService, // implementation
    // },
    // {
    //   provide: CarsService, // contract, injection token
    //   useValue: cars2, // implementation
    // },
    // {
    //   provide: CarsService, // contract, injection token
    //   useFactory: () => someFlag ? new CarsService() : cars2, // implementation
    // },
    {
      provide: CarsServiceToken,
      // useValue: cars2,
      useClass: CarsService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
