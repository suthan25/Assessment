import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent implements OnInit,OnDestroy{
  selectedItem!: any;
  constructor(private service:DataSharingService){}
  ngOnInit(): void {
    this.selectedItem = this.service.selected
  }
  ngOnDestroy(): void {
    this.selectedItem.pop()
    console.log(this.selectedItem)
  }
}
