import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  public NonVeg:any[] = [{id:1,restaurant:'Arun nonVeg Hub',img:'../assets/nonveg1.jpg',food:'chicken lolipop',price:300,rating:4.8},
  {id:2,restaurant:'best food cafe',img:'../assets/nonveg2.jpg',food:'fish fry',price:240,rating:4.6},
  {id:3,restaurant:'friendly foodie',img:'../assets/nonveg3.jpg',food:'egg curry',price:180,rating:4.8},
  {id:1,restaurant:'AKS nonVeg Hub',img:'../assets/nonveg4.jpg',food:'chicken curry',price:290,rating:4.3},
  {id:1,restaurant:'Bowl food stall',img:'../assets/nonveg5.jpg',food:'mutton soup',price:190,rating:4.7},
  {id:1,restaurant:'Success foodie',img:'../assets/nonveg6.jpg',food:'prawn fry',price:350,rating:4.8}
  ]
  
  public Veg:any[] = [{id:1,restaurant:'Ananda Bhavan',img:'../assets/veg1.jpg',food:'Veg curry',price:200,rating:4.7},
    {id:2,restaurant:'Satya Veg hotel',img:'../assets/veg2.jpg',food:'Chappathi',price:150,rating:4.0},
    {id:3,restaurant:'Arya Bhavan',img:'../assets/veg3.jpg',food:'Veg meals',price:220,rating:3.8},
    {id:4,restaurant:'Anna Restaurant',img:'../assets/veg4.jpg',food:'Veg pizza',price:260,rating:4.4},
    {id:5,restaurant:'Kings hotel',img:'../assets/veg5.jpg',food:'Pasta',price:170,rating:3.8},
    {id:3,restaurant:'Famous foodie',img:'../assets/veg6.jpg',food:'Veg Fried rice',price:270,rating:4.0}
  ]
}