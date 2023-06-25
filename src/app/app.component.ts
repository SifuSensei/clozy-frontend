import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ClothesService } from './services/clothes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clozyapp';
  user;
  use;
  us;
  s = ''
  searchForm;
  totalC = 0
  
constructor(private cSer: ClothesService, private cartSer: CartService, private uSer: UserService, private router: Router, private builder: FormBuilder){
this.user = uSer.get_current_user()
this.use = this.uSer.isAuthenticated()
this.us = !this.uSer.isAuthenticated()

this.searchForm = builder.group({
  search: [" ", [Validators.required]]
})
}
 ngOnInit(): void {
  this.cartSer.getOrder().subscribe(res =>{
    this.totalC = res.length
  })
}
logout(){
  localStorage.removeItem("currentuser")
  this.router.navigate(['login']).then(()=>{
    window.location.reload()
  })
 
}
submit(){
 this.router.navigate(['/search/' + this.s]).then(()=>{
  window.location.reload()
 })
}


}
