import { Component, OnInit, OnDestroy } from '@angular/core';
import { Icategory, Iclothes } from 'src/app/interfaces/iclothes';
import { CartService } from 'src/app/services/cart.service';
import { ClothesService } from 'src/app/services/clothes.service';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss'],
})
export class ClothesComponent implements OnInit{
clothes : Iclothes[] = []
searchFilter = ''
t : any
clo! : Iclothes 


constructor(private cSer: ClothesService, private cartSer: CartService, private http: HttpClient){
    
 




}
getName(name :any){
    this.cSer.getReview(name).subscribe((result) =>{
      this.clo = result
    })
}


getClothesM(c:any){
  
  this.cSer.getFilter(c).subscribe((result) =>{
    this.t = result
    
  })

}
addToCart(order: any){
  if(!this.cartSer.inCart(order)){
    order.quantity = 1;
    this.cartSer.addToCart(order)
    
    

  }
  
}

ngOnInit(): void {
  this.cSer.getClothesM().subscribe((result)=>{
    this.clothes = result
  }) 
 
}



}
