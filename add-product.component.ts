import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
productForm : FormGroup;
product = {};
productId : any;
Product: any;
title="add product"
  constructor(private productService : ProductService , private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.productForm= this.formBuilder.group({
      name:[''],
      price:[''],
      quantity:[''],
    })
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
   if (this.productId) {
    this.title="add product"
    this.productService.getProductById(this.productId).subscribe(
      (data)=>{
        this.product = data.product;
       });

    }
  }
  addOrEditProduct(){
    // edit product
    if (this.productId) {
      this.productService.editProduct(this.product).subscribe(
        (data)=>{
          console.log('data after edit', data.message);
        }
      );
    // add product      
    }else{
      console.log("here final product", this.product);
      this.productService.addProduct(this.product).subscribe(
        (data) =>{
          console.log("here response after adding", data.message)
             });
    }  
}
}
