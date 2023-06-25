import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ModalDismissReasons, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iclothes, Iorders } from 'src/app/interfaces/iclothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { asyncScheduler } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderItems: Iclothes[] = [];
  value = false
  closeResult = '';
  checkForm:any;
  orderInfo! : Iorders
  yo = false
 

  constructor(private cartSer: CartService,private cloSer: ClothesService ,private modalService: NgbModal,  private formBuilder: FormBuilder, private uSer: UserService, private router: Router){
    this.checkForm = formBuilder.group({
      merchant: ['', [Validators.required]],
      date: formatDate(new Date(), 'yyyy/MM/dd/hh/mm/ss', 'en'),
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      payment: ['', [Validators.required, Validators.maxLength(9)]],
      status: ['pending', [Validators.required]],
     
    
    })
   
  }

 get creditForm(){
  return this.checkForm.get('payment')
 }
 
  
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			}
		); 
	}
 
  ngOnInit(): void {
    this.cartSer.getOrder().subscribe((res) => {
      this.orderItems = res;
    
    
    });this.orderItems = this.cartSer.get_cart()
        
  }
  orderPost(){
    const op = this.checkForm.value
    op.clothes = JSON.stringify(this.orderItems.map(item => item.id))
    
    op.total = this.totalP()
    this.cloSer.postOrders(op).subscribe((result) =>{
      console.log(result)
      this.checkForm.reset()
      this.modalService.dismissAll();
      this.e()
      this.value = true
    })
  }
  
 
    d(c_id:any){
      this.cartSer.deleteCs(c_id)
    }
  
    e(){
      this.cartSer.empty()
    }
 
 
  change(){
    window.location.replace('/mens-clothes')
  }


  
  totalP() : number{
    return this.orderItems?.reduce(
      (sum:any, product:any) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price,
      }),
      { quantity: 1, price: 0 }
    ).price;
    }

  get totalPrice() : number{
    return this.orderItems?.reduce(
      (sum:any, product:any) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price,
      }),
      { quantity: 1, price: 0 }
    ).price;
    }
}
