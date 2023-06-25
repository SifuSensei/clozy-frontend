import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Icategory, Iorders } from 'src/app/interfaces/iclothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { UserService } from 'src/app/services/user.service';
import { Chart, registerables, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
lineChart : any = []
orders : Iorders[] = []
dates : Iorders[] = []
id : Iorders[] = []
closeResult = '';
user;
pForm;
b = false
cat : Icategory[] = []

 barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
 
  scales: {
    x: {},
    y: {
      min: 10
    }
  },
  plugins: {
    legend: {
      display: true,
    }
  }
};
constructor(private cSer: ClothesService, private uSer: UserService, private formBuilder: FormBuilder,private modalService: NgbModal){
cSer.getOrders().subscribe((result) =>{
  this.orders = result
  this.dates = this.orders.map((date : any) =>
    date.date)
    this.id = this.orders.map((to : any) =>
    to.total)
    
    this.lineChart = {
      
      labels:  this.dates,
      datasets: [
        {
          data: this.id,
          label: "Single Order Total",
          fill: true,
          backgroundColor: '#E7BBE3',
          borderColor: 'black',
          borderWidth: 2
        }
      ]
    }
      console.log(this.dates, this.id)  
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

cSer.getCategory().subscribe((result) =>{
  this.cat = result
})
Chart.defaults.font.size = 20;

}
open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    }
  ); 
}
postClothes(){
  const pd = this.pForm.value;
  pd.quantity = 0

  this.cSer.postClothes(pd).subscribe((result) =>{
    console.log(result)
    this.pForm.reset()
    this.modalService.dismissAll()
    this.b = true
  })
}
}
