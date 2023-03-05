import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Page404Component } from './core/page404/page404.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.homePage,
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'perfil',
        loadChildren: () =>
          import('./modules/perfil/perfil.module').then((m) => m.PerfilModule),
      },
    ],
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
