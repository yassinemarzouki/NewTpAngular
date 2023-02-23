import { Component, OnInit } from '@angular/core';
import { product } from '../Core/model/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  Product!:product;

  constructor() { }

  ngOnInit(): void {
    this.Product=new product();
  }


}
