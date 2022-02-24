import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { UserModule } from './user/user.module';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'car-tool',
    loadChildren: () => import('./car-tool/car-tool.module')
      .then(m => m.CarToolModule),
    canActivate: [MsalGuard],
  },
  {
    path: 'user',
    loadChildren: () => UserModule, 
    canActivate: [MsalGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabled' : 'disabled', // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
