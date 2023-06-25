import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory, Iclothes } from 'src/app/interfaces/iclothes';
import { CartService } from 'src/app/services/cart.service';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-wfilter',
  templateUrl: './wfilter.component.html',
  styleUrls: ['./wfilter.component.scss']
})
export class WfilterComponent {
  c_id = 0
  cat : Icategory[] = []
  item : Iclothes[] = []

  constructor(private Route: ActivatedRoute, private cloSer: ClothesService, private router: Router, private cartSer: CartService){
      const c_id = this.Route.snapshot.paramMap.get('c_id')
      this.cloSer.womensCategory(c_id).subscribe((result) =>{
        this.item = result
      })
      cloSer.getCategory().subscribe((result) =>{
        this.cat = result
      })
  }
  addToCart(order: any){
    if(!this.cartSer.inCart(order)){
      order.quantity = 1;
      this.cartSer.addToCart(order)
      
    }}
    navDance(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/11');
    }); 
    }
    navTennis(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/12');
    }); 
    }
    navBasketball(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/13');
    }); 
    }
    navRunning(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/14');
    }); 
    }
    navFootball(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/15');
    }); 
    }
    navTraining(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/16');
    }); 
    }
    navYoga(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/17');
    }); 
    }
    navShoes(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/5');
    }); 
    }
    navSports(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/10');
    }); 
    }
    navShirts(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/6');
    }); 
    }
    navSweaters(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/7');
    }); 
    }
    navJackets(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/8');
    }); 
    }
    navPants(){
      this.router.navigate(['womens-clothes']).then(() => {
        this.router.navigateByUrl('/womens-clothes/9');
    }); 
  }

}
