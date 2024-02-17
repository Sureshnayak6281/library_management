import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authantication/authantication.module').then(
        (m) => m.AuthanticationModule
      ),
  },
  {
    path: 'authur',
    loadChildren: () =>
      import('./authur/authur.module').then((m) => m.AuthurModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
