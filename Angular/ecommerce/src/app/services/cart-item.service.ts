import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  private httpClient:HttpClient;
  private APIURL:string = "http://localhost:3000/shoppingcart";

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  findAll():Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>(this.APIURL);
  }

  save(cartItem:CartItem):Observable<CartItem> {
    return this.httpClient.post<CartItem>(this.APIURL, cartItem);
  }

  update(cartItem:CartItem) {
    return this.httpClient.put<CartItem>(this.APIURL + "/" + cartItem.id, cartItem)
  }

  delete(cartItem:CartItem) {
    return this.httpClient.delete<CartItem>(this.APIURL + "/" + cartItem.id);
  }

}
