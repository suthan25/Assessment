import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsService } from './restaurants.service';
import { CustomPipe } from './custom.pipe';



@NgModule({
  declarations: [
    CustomPipe
  ],
  imports: [
    CommonModule
  ],
  providers:[RestaurantsService]
})
export class ServicesModule { }
