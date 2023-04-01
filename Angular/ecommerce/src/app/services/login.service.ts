import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient:HttpClient;
  private APIURL:string = "http://localhost:3000/login";

  private _loggedInSource:BehaviorSubject<any> = new BehaviorSubject(undefined);
  public loggedInUser:Observable<LoginResponse> = this._loggedInSource.asObservable();

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  doLogin(credentials:Credentials):Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.APIURL, credentials);
  }

  set loggedInSource(loginResponse:LoginResponse | undefined) {
    this._loggedInSource.next(loginResponse);
  }

  public logout() {
    this._loggedInSource.next(undefined);
  }

}
