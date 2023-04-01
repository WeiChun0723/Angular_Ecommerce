import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient:HttpClient;
  private APIURL:string = "http://localhost:3000/users";

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  save(user:User):Observable<User> {
    return this.httpClient.post<User>(this.APIURL, user);
  }

}
