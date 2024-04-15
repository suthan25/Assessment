import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VegComponent } from './home/veg/veg.component';
import { NonVegComponent } from './home/non-veg/non-veg.component';
import { RestaurantListingComponent } from './restaurant-listing/restaurant-listing.component';

const routes: Routes = [{path:'',component:HomeComponent,children:[
  {path:'veg',component:VegComponent},{path:'nonVeg',component:NonVegComponent}
]},{path:'listing',component:RestaurantListingComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
