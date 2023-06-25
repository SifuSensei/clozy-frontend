import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { FilterComponent } from './components/filter/filter.component';
import { CartComponent } from './components/cart/cart.component';
import { Route } from './class/route';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthguardService } from './services/authguard.service';
import { WomenComponent } from './components/women/women.component';
import { WfilterComponent } from './components/wfilter/wfilter.component';
import { DataComponent } from './components/data/data.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { SfilterComponent } from './components/sfilter/sfilter.component';
import { FlandingComponent } from './components/flanding/flanding.component';
import { MlandingComponent } from './components/mlanding/mlanding.component';
import { VieworderComponent } from './components/vieworder/vieworder.component';
import { AllreviewsComponent } from './components/allreviews/allreviews.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "mens-clothes", component: ClothesComponent},
  {path: "womens-clothes", component: WomenComponent},
  {path: "mens-clothes/:c_id", component: FilterComponent, runGuardsAndResolvers: 'always'},
  {path: "womens-clothes/:c_id", component: WfilterComponent, runGuardsAndResolvers: 'always'},
  {path: "checkout", component: CartComponent},
  {path: "review/:cl_id", component: ReviewsComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent, canActivate: [AuthguardService]},
  {path: "data", component: DataComponent, canActivate: [AuthguardService]},
  {path: "change", component: AdminComponent, canActivate: [AuthguardService]},
  {path: "seasons/:s_id", component: SeasonsComponent},
  {path: "winter", component: SfilterComponent},
  {path: "summer", component: SfilterComponent},
  {path: "women", component: FlandingComponent},
  {path: "men", component: MlandingComponent},
  {path: "orders/:o_id", component: VieworderComponent},
  {path: "reviews", component: AllreviewsComponent},
  {path: "search/:s_id", component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
