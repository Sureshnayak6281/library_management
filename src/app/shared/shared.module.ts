import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthanticationRoutingModule } from '../authantication/authantication-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalTableComponent } from './global-table/global-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  declarations: [
    GlobalTableComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    AuthanticationRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
    
    
    
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: { useUtc: true } },
    DatePipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    AuthanticationRoutingModule,
    MatSnackBarModule,
    GlobalTableComponent,
    MatTableModule
  ],
})
export class SharedModule {}
