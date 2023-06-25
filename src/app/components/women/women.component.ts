import { Component } from '@angular/core';
import { Iclothes } from 'src/app/interfaces/iclothes';
import { CartService } from 'src/app/services/cart.service';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent {
clothes : Iclothes[] = []
t : any

constructor(private cloSer : ClothesService, private cartSer : CartService){
  cloSer.getClothesF().subscribe((result) =>{
    this.clothes = result
  })
}
addToCart(order: any){
  if(!this.cartSer.inCart(order)){
    order.quantity = 1;
    this.cartSer.addToCart(order)
  }
 
}
getClothesM(c:any){ 
  this.cloSer.getFilter(c).subscribe((result) =>{
    this.t = result
  })
}
}
