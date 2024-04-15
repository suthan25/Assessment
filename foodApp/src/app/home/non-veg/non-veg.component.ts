import { Component } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { DataSharingService } from '../../services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrl: './non-veg.component.css'
})
export class NonVegComponent {
  restaurant: any;
  constructor(private service:RestaurantsService,private data:DataSharingService,
    private router:Router
  ){
    this.service
  }
  ngOnInit(): void {
    this.restaurant = this.service.NonVeg
  }
  viewRestaurant(i:any){
    this.data.addItem(i)
    console.log(this.data.selected)
    this.router.navigate(['/listing'])
  }
}
