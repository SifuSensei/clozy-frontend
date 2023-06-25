import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
import { Icategory, Iclothes } from 'src/app/interfaces/iclothes';
import { CartService } from 'src/app/services/cart.service';
import { ClothesService } from 'src/app/services/clothes.service';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { Route } from 'src/app/class/route';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent  {
c_id = 0
cat : Icategory[] = []
item : Iclothes[] = []

constructor(private cSer: ClothesService,private cartSer: CartService ,private router: Router, private aRoute: ActivatedRoute){
  const c_id = this.aRoute.snapshot.paramMap.get('c_id')
  this.cSer.mensCategory(c_id).subscribe((result) =>{
  this.item = result
  

})
cSer.getCategory().subscribe((result) =>{
  this.cat = result
})
}
addToCart(order: any){
  if(!this.cartSer.inCart(order)){
    order.quantity = 1;
    this.cartSer.addToCart(order)
    
  }
}



navTennis(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/12');
}); 
}
navBasketball(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/13');
}); 
}
navRunning(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/14');
}); 
}
navFootball(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/15');
}); 
}
navTraining(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/16');
}); 
}
navYoga(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/17');
}); 
}
navShoes(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/5');
}); 
}
navSports(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/10');
}); 
}
navShirts(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/6');
}); 
}
navSweaters(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/7');
}); 
}
navJackets(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/8');
}); 
}
navPants(){
  this.router.navigate(['mens-clothes']).then(() => {
    this.router.navigateByUrl('/mens-clothes/9');
}); 
}






}
