import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productURL: string = "http://localhost:3000/products";
  constructor(private httpClient : HttpClient) { }
addProduct(obj : any){
  return this.httpClient.post<{ message: string }>(this.productURL, obj);
}
getAllProducts(){
  return this.httpClient.get<{allSpecialties: any, message: string}>(this.productURL);
}
deleteProductById(id:any){
  // supprision avec l'id dynamique
return this.httpClient.delete<{ message: string}>(`${this.productURL}/${id}`);
}
getProductById(id:any){
  return this.httpClient.get<{ message: string, product: any}>(`${this.productURL}/${id}`);
}
editProduct(newproduct:any){
  return this.httpClient.put<{ message: string}>(`${this.productURL}/${newproduct._id}`, newproduct);
}
//search product by name
searchProduct(obj){
  return this.httpClient.post(`${this.productURL}/search`,obj);
}
}
