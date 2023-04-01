import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public httpClient:HttpClient;
  public APIURL:string = "http://localhost:3000/products";

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  findAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.APIURL);
  }

}
