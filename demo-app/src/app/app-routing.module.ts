

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'color-tool',
    loadChildren: () => import('./color-tool/color-tool.module')
      .then(m => m.ColorToolModule)
  },
  { path: 'car-tool',
    loadChildren: () => import('./car-tool/car-tool.module')
      .then(m => m.CarToolModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
