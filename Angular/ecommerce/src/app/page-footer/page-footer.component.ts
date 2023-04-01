import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})
export class PageFooterComponent implements OnInit {

  public message:string;
  public currentDate:Date;

  constructor() { 
    this.currentDate = new Date();
    this.message = "Copyright &copy; Mercedes - Benz";
  }

  ngOnInit(): void {
  }

}
