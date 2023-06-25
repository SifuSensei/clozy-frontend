import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { WomenComponent } from './components/women/women.component';
import { FilterComponent } from './components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { WfilterComponent } from './components/wfilter/wfilter.component';
import { SearchPipe } from './pipes/search.pipe';
import { NgChartsModule } from 'ng2-charts';
import { DataComponent } from './components/data/data.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { SwiperModule } from 'swiper/angular';
import { SfilterComponent } from './components/sfilter/sfilter.component';
import { MlandingComponent } from './components/mlanding/mlanding.component';
import { FlandingComponent } from './components/flanding/flanding.component';
import { VieworderComponent } from './components/vieworder/vieworder.component';
import { AllreviewsComponent } from './components/allreviews/allreviews.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    ClothesComponent,
    HomeComponent,
    WomenComponent,
    FilterComponent,
    CartComponent,
    ReviewsComponent,
    AdminComponent,
    LoginComponent,
    WfilterComponent,
    SearchPipe,
    DataComponent,
    SeasonsComponent,
    SfilterComponent,
    MlandingComponent,
    FlandingComponent,
    VieworderComponent,
    AllreviewsComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    NgChartsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
