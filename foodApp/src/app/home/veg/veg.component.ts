import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { DataSharingService } from '../../services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.css'
})
export class VegComponent implements OnInit{
  restaurant: any;
  constructor(private service:RestaurantsService,private data:DataSharingService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.restaurant = this.service.Veg
  }
  viewRestaurant(i:any){
    this.data.addItem(i)
    console.log(this.data.selected)
    this.router.navigate(['/listing'])
  }
}
