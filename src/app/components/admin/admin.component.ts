import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Iorders, Icategory,  Iclothes } from 'src/app/interfaces/iclothes';
import { ModalDismissReasons, NgbModal, NgbActiveModal, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ClothesService } from 'src/app/services/clothes.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
orders : Iorders[] = []
clothes: Iclothes[] = []
dates : Iorders[] = []
id : Iorders[] = []
user;
priceForm;
patch;
closeResult = '';
pForm;
b = false
p = false
d = false
deleted = false
cat : Icategory[] = []
chart: any = []
lineChart : any = [] 
simple = false
c : any
constructor(private cloSer: ClothesService, private uSer: UserService, private formBuilder: FormBuilder,private modalService: NgbModal, private router: Router){
  Chart.register(...registerables);
  cloSer.getOrders().subscribe((result)=>{
    this.orders = result
    
  })
  
  this.user = uSer.get_current_user()
  this.pForm = this.formBuilder.group({
    category_id: ['', Validators.required],
    gender: ['', Validators.required],
    name: ['', Validators.required],
    picture: ['', Validators.required],
    price: ['', Validators.required],
    quantity: [0, Validators.required],
  })
  this.priceForm = formBuilder.group({
    price: ['', [Validators.required]]
  })
  this.patch = formBuilder.group({
    status: ['', [Validators.required]]
  })
  cloSer.getCategory().subscribe((result) =>{
    this.cat = result
  })
  cloSer.getClothes().subscribe((result) =>{
    this.clothes = result
  })
}
ngOnInit(): void {

}
open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    }
  ); 
}
ope(pr: any) {
  this.modalService.open(pr, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    }
  ); 
}


postClothes(){
  const pd = this.pForm.value;
  pd.quantity = 0

  this.cloSer.postClothes(pd).subscribe((result) =>{
    console.log(result)
    this.pForm.reset()
    this.modalService.dismissAll()
    this.b = true
    
  })
}
patchP(c_id : any){
  const p = this.priceForm.value
  this.cloSer.patchClothes(c_id, p).subscribe((result) =>{
    console.log(result)
    this.modalService.dismissAll()
    this.p = true
  })
}
patchStatus(o_id : any){
  const status = this.patch.value
  this.cloSer.patchOrder(o_id, status).subscribe((result) =>{
    console.log(result)
    this.d = true
  })
}
deleteC(c_id : any){
  this.cloSer.deleteClothes(c_id).subscribe((result) =>{
    console.log(result)
    const i = this.clothes.findIndex((i) =>{
      return i.id === c_id
    })
    this.clothes.splice(i, 1)
    this.deleted =true
  })
  
}
aRoute(){
 return this.router.url.includes('admin')
}
cRoute(){
 return this.router.url.includes('change')
}
dRoute(){
  return this.router.url.includes('data')
}
}
