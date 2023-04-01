import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credentials';
import { LoginResponse } from '../models/login-response';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials:Credentials;
  public loginResponse:LoginResponse | undefined;
  private loginService:LoginService;
  public message:string = "";

  constructor(loginService:LoginService) { 
    this.credentials = new Credentials("", "")
    this.loginService = loginService;
    this.loginResponse = undefined;
  }

  ngOnInit(): void {
    this.loginService.loggedInUser.subscribe((data:LoginResponse | undefined) => {
        this.loginResponse = data;
    })
  }

  doLogin() {
    this.loginService.doLogin(this.credentials).subscribe((loginResponse:LoginResponse)=>{
      // this.loginResponse = loginResponse;
      this.loginService.loggedInSource = loginResponse;
    })
  }

  doLogout() {
    this.loginService.loggedInSource = undefined;
  }

}
