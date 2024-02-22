import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
// import { API_URL } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }
  title = 'library-management';

  close() {
    this.sidenav.close();
  }
  isLoginPageRoute(): boolean {
    return this.router.url === '/login';
  }
}
