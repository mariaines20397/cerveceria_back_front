import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { modelProducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BackProductService {

URL_API='http://localhost:3000/products/'

  products: modelProducts[] = []; 

  selectedProduct: modelProducts={
    id_product : 0,
    name:"",
    description:"",
    type_product:"",
    price:0,
    img:""


  };

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.URL_API)
    
  }

  createProduct(product:modelProducts){
    return this.http.post(this.URL_API,product)
  }

  
  deleteProduct(id:String){
    return this.http.delete(this.URL_API + id)
    
  }
/*
  putProduct(product:modelProducts){
return this.http.put(`${this.URL_API}/${product._id}`,product)
  }*/
  putProduct(id:String, product:modelProducts):Observable<any>{
    return this.http.put(this.URL_API+id, product)
      }
}
