import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
//   useFactory: () => new ConsoleLoggerService(),
// })
// @Injectable()
export class ConsoleLoggerService {

  constructor(private prefix: string = "App >") { }

  log(message: string) {
    console.log(`${this.prefix} ${message}`);
  }
}
