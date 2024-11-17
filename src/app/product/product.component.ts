import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() image:string="";
  @Input() price:number=0.0;
  @Input() purchaseDate:string="";
  @Input() feature:string="";
  @Input() itemName:string="";
  @Input() address:string="";
  constructor() { }
  favourite:boolean=false
  ngOnInit() {}
  addtoFavourite(event){
    if (!this.favourite){
      this.favourite=!this.favourite
      event.target.name="heart"
    }
    else{
      this.favourite=!this.favourite
      event.target.name="heart-outline"
    }
  }
}
