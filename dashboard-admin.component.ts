import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from 'express';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  Product :any;
  allProducts: any=[];
  constructor(private myRouter:Route, private productService: ProductService , private router: Router, private myRoute: Router ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.Product = data.allSpecialties;
      });
  }
  // edit Product
editProduct(productId: Number) {
  //this.myRouter.navigate([`editProduct/${productId}`])
}
//delete Product
deleteProductById(id: number) {
  alert(`Product N° ${id} is deleted`);
  this.productService.deleteProductById(id).subscribe(
    (data) => {
      console.log("here after delete", data.message);
      this.allProducts;
    }
  )
};
}
