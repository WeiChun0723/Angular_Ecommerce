import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../models/login-response';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private loginService:LoginService;
  public loginResponse:LoginResponse | undefined;

  constructor(loginService:LoginService) { 
    this.loginService = loginService;
    this.loginResponse = undefined;
  }

  ngOnInit(): void {
    this.loginService.loggedInUser.subscribe((data:LoginResponse | undefined) => {
      this.loginResponse = data;
    })
  }

}
