import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
// import { API_URL } from './app.constants';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  

  constructor(private http: HttpClient ) { }

  public login(phone:string ): Observable<any> {
   
    let body: HttpParams = new HttpParams();
    // body = body.append('email', email);
    // body = body.append('password',password);
    body = body.append('mobile',phone);
    return this.http.post(`http://localhost/library_management/register.php`, body)
      .pipe(
        map((res: any) => {
          return res;
          
          
        }),
        // catchError(this.errorHandler.handleError)
      );
  }

  public verifyotp(otp:string ): Observable<any> {
   
    let body: HttpParams = new HttpParams();
    body = body.append('otp',otp);
    return this.http.post(`http://localhost/library_management/verify.php`, body)
      .pipe(
        map((res: any) => {
          return res;
          
          
        }),
        // catchError(this.errorHandler.handleError)
      );
  }
}
