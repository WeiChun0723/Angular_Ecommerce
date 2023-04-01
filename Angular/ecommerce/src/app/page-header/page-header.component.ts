import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  public appTitle:string;

  constructor() { 
    this.appTitle = "Mercedes - Benz";
  }

  ngOnInit(): void {
  }

}
