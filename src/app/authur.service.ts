import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthurService {
  

  constructor(private http:HttpClient) { }

  get_authurs(authur_names:string): Observable<any>{
    let body: HttpParams = new HttpParams();
    body = body.append('author',authur_names);
    return this.http.post(`http://localhost/library_management/get_authurs.php`, body)
      .pipe(
        map((res: any) => {
          return res;
          
          
        }),
        
      )
  }
  createauthur(authur_name:string,user_name:string, email:string ): Observable<any>{
    let body: HttpParams = new HttpParams();
    body = body.append('author',authur_name);
    body = body.append('username',user_name);
    body = body.append('email',email);
    return this.http.post(`http://localhost/library_management/create_authur.php`, body)
    .pipe(
        map((res: any) => {
          console.log(res);
          return res;

          
        }),
    )    
  }

  on_change_page(page:string): Observable<any>{
    let body: HttpParams = new HttpParams();
    body = body.append('pageIndex', page);
    return this.http.post(`http://localhost/library_management/get_authurs.php`, body)
      .pipe(
        map((res: any) => {
          return res;          
        }),
      )
  }
}
