import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory, Iclothes, Icreview, Iorders, Ireviews, IreviewsDesc } from '../interfaces/iclothes';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
url = "http://localhost:3000/clothes"
urlFilter = "http://localhost:3000/clothes/search?name="
urlE = "http://localhost:3000/clozy"
urlM = "http://localhost:3000/clothes/type?gender=m"
urlF = "http://localhost:3000/clothes/type?gender=f"
urlMC = "http://localhost:3000/clothes/type?gender=m&category_id="
urlFC = "http://localhost:3000/clothes/type?gender=f&category_id="
urlC = "http://localhost:3000/categories"
urlR = "http://localhost:3000/creview/"
urlReview = "http://localhost:3000/reviews"
urlReviewDesc = "http://localhost:3000/reviews/desc"
urlReviewS = "http://localhost:3000/reviews/clothes?clothes_id=1"
urlOrder = "http://localhost:3000/orders"
urlOrderId = "http://localhost:3000/order/"
shoes : Iclothes[] = []

constructor(private http: HttpClient) { }

getClothes(){
  return this.http.get<Iclothes[]>(this.url)
}

getFilter(c:any){
  return this.http.get<Iclothes[]>(this.urlFilter + c)
}
// getFilter(c:any){
//   return this.http.get<Iclothes[]>(this.urlFilter, {params: {name: c}})
// }
deleteClothes(c_id : number){
  return this.http.delete<Iclothes>(this.urlE + "/" + c_id)
}
patchClothes(c_id : number, cData:any){
  return this.http.patch<Iclothes>(this.urlE + "/" + c_id, cData)
}
getClothesM(){
  return this.http.get<Iclothes[]>(this.urlM)
}
getClothesF(){
  return this.http.get<Iclothes[]>(this.urlF)
}
postClothes(cdata:any){
  return this.http.post<Iclothes>(this.url, cdata)
}

mensCategory(c_id : any) {
 return this.http.get<Iclothes[]>(this.urlMC + c_id)
}
womensCategory(c_id : any) {
 return this.http.get<Iclothes[]>(this.urlFC + c_id)
}

getCategory(){
  return this.http.get<Icategory[]>(this.urlC)
}
getCategoryId(c_id:any){
  return this.http.get<Icategory>(this.urlC + c_id)
}
getReview(c_id : any){
  return this.http.get<Icreview>(this.urlR + c_id)
}
getReviews(c_id : any){
  return this.http.get<Icreview[]>(this.urlR + c_id)
}
postReview(review : any){
  return this.http.post<Ireviews>(this.urlReview, review)
}
getAllReview(){
  return this.http.get<Ireviews[]>(this.urlReview)
}
getDescReview(){
  return this.http.get<IreviewsDesc[]>(this.urlReviewDesc)
}
getAllReviewS(){
  return this.http.get<Ireviews[]>(this.urlReviewS)
}
postOrders(order:any){
  return this.http.post<Iorders>(this.urlOrder, order)
}
getOrders(){
  return this.http.get<Iorders[]>(this.urlOrder)
}
getOrderId(o_id : any){
  return this.http.get<Iorders>(this.urlOrderId + o_id)
}
patchOrder(o_id : any, oData : any){
  return this.http.patch<Iorders>(this.urlOrderId + o_id, oData)
}


}
