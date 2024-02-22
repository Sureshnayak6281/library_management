import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthurRoutingModule } from './authur-routing.module';
import { AuthurComponent } from './authur.component';
import { SharedModule } from '../shared/shared.module';
import { CreateupdateauthurComponent } from './createupdateauthur/createupdateauthur.component';
import { BooksComponent } from './books/books.component';





@NgModule({
  declarations: [
    AuthurComponent,
    CreateupdateauthurComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    AuthurRoutingModule,
    SharedModule
  ]
})
export class AuthurModule { }
