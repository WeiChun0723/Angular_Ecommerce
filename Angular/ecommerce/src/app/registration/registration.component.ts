import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user:User;
  public message:string;
  private userService:UserService;

  constructor(userService:UserService) { 
    this.user = new User(0, "", "", "", "");
    this.userService = userService;
    this.message = "";
  }

  ngOnInit(): void {
  }

  doSave() {
    this.userService.save(this.user).subscribe(() => {
      this.message = "Your Registration is successful";
      this.user = new User(0, "", "", "", "");
    })
  }

}
