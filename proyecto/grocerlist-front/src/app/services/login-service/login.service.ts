import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from '../../models/loginReq';
import { BasicService } from '../basic.service';
import { enviroment } from '../../../enviroment/enviroment';
import { RegisterRequest } from '../../models/registerReq';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BasicService{
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor(private http: HttpClient) {
    super();
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
    this.currentUserData = new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
  }

  login(credentials:LoginRequest):Observable<any>{
    return this.http.post<any>(enviroment.apiURL + "auth/login", credentials).pipe(
      tap( (userData) => {
        sessionStorage.setItem("token", userData.token);
        sessionStorage.setItem("username", credentials.username);
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
        
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  register(credentials:RegisterRequest):Observable<any>{
    return this.http.post<any>(enviroment.apiURL + "auth/register", credentials).pipe(
      tap( (userData) => {
        sessionStorage.setItem("token", userData.token);
        sessionStorage.setItem("username", credentials.username);
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  logout():void{
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
  }

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  get userToken():String{
    return this.currentUserData.value;
  }
}
