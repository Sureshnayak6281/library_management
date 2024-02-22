import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
// import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, SideNavbarComponent, ToolbarComponent, DialogboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    SharedModule,
    // MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
