import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthurComponent } from './authur.component';

const routes: Routes = [{ path: '', component: AuthurComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthurRoutingModule { }
