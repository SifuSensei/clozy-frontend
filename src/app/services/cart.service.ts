import { Injectable } from '@angular/core';
import { Iclothes } from '../interfaces/iclothes';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  main = new BehaviorSubject<Iclothes[]>([]);

  cartItems: Iclothes[] = [];


  constructor(private http: HttpClient, private userSer: UserService) {}


  getOrder() {
    return this.main.asObservable();
  }

  deleteCs(c_id : any){
    const i = this.cartItems.findIndex((i) =>{
      return i.id === c_id
     
    })
    this.cartItems.splice(i, 1)
    localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
    this.main.next(this.cartItems)
  }

  empty() {
    localStorage.removeItem('cart_items')
    this.cartItems = []
    this.main.next(this.cartItems)
    
  }
  
  

  addToCart(order:any){
    this.cartItems.push(order)
    this.main.next(this.cartItems)
    this.saveCart()
    console.log(this.cartItems)
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
   
  }
 
  get_cart(){
    return JSON.parse(localStorage.getItem('cart_items')!);
  }
  

  inCart(order: any) : boolean{
    return this.cartItems.findIndex((x: any) =>  x.id === order.id  ) > -1
  }




  

 
}










 // setOrder(order:any){
  //   this.cartItems.push(...order)
  //   this.main.next(order)
    
  // }