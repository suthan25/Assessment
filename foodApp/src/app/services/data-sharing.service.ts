import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
    constructor() { }
    private restaurant:any[]=[]
    addItem(i:any){
      this.restaurant.push(i)
    }
    get selected(){
      return this.restaurant
    }
}
