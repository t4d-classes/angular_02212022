import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// RxJS Demo

// import { Observable } from "rxjs";

// push
// const p = new Promise(resolve => {

//   setTimeout(() => {
//     console.log('resolved a');
//     resolve('a');
//   }, 2000);

// });

// console.log('called then');
// p.then(result => {
//   console.log(result);
// });

// console.log('called then');
// p.then(result => {
//   console.log(result);
// });

// let subscriberCount = 0;

// pull
// const o = new Observable(subscriber => {

//   // subscriberCount++;

//   let num = 0;

//   const handle = setInterval(() => {

//     if (subscriber.closed) {
//       clearInterval(handle);
//       return;
//     }

//     console.log('generate next num: ' + num)
//     subscriber.next(num++);
//   }, 500);

//   setTimeout(() => {
//     clearInterval(handle);
//     subscriber.complete();
//   }, 10000);

// });

// console.log('called subscribe');
// const subscription = o.subscribe({
//   next: result => {
//     console.log(result);
//   },
//   complete: () => {
//     console.log('all done');
//   },
// });

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);

// console.log('called subscribe');
// o.subscribe({
//   next: result => {
//     console.log(result);
//   },
// });

// console.log("subscribe count: " , subscriberCount);