import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthanticationComponent } from './authantication.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthanticationComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,   
  ]
})
export class AuthanticationModule { 


}
