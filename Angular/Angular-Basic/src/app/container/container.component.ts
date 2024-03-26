import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {
  // names = ['Milk', 'Food', 'Rest', 'Cakes'];
  // Name: string = 'Bazeel Bin Waris';
  // addToCart: number = 0;

  // product = {
  //   name: 'iPhone 15 Pro Max',
  //   price: 1500,
  //   color: 'Blue',
  //   discount: 8.5,
  //   inStock: 10,
  //   mobileImage: '../../assets/images/iPhone.jpg'
  // };

  // getDiscountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount / 100);
  // }

  // onNameChange(event: any) {
  //   this.Name = event.target.value;
  // }
  // decrementCartValue() {
  //   if(this.addToCart > 0) {
  //     this.addToCart--;
  //   }
  // }

  // incrementCartValue() {
  //   if(this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }
  // }
  searchText: string = '';

  @ViewChild('product-list') productListComponent: ProductListComponent;
  
  setSearchText(value: string) {
    this.searchText = value;
  }

  getData(data:any){
    console.log(data.target,"THIS IS THE DATAAAAAAAAAAAAAAAAAA")
  }
}
