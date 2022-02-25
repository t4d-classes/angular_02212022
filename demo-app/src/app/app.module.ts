import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ES2015 Module Import - JavaScript feature
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// import { CarsServiceToken } from './car-tool/models/carsService';
// import { CarsService } from './car-tool/services/cars.service';
// import { cars2 } from './car-tool/services/cars2.service';

// import { ConsoleLoggerService } from './shared/services/console-logger.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


const someFlag = false;

// Angular Module
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
    // {
    //   provide: CarsServiceToken,
    //   // useValue: cars2,
    //   useClass: CarsService,
    // },
    // {
    //   provide: ConsoleLoggerService,
    //   useFactory: () => new ConsoleLoggerService(),
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
