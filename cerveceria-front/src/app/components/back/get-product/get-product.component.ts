import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { modelProducts } from 'src/app/models/product';
import { BackProductService } from 'src/app/services/back-product.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.scss']
})
export class GetProductComponent implements OnInit {

  constructor(public backProduct:BackProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  
  getProducts(){
    this.backProduct.getProducts().subscribe(
      res => {
        this.backProduct.products = res
      },
      err => console.log(err)
      )
  }
  
  deleteProduct(id:any){
   const res= confirm('Estas seguro que quieres eliminar este producto?')
   if (res) {
     this.backProduct.deleteProduct(id).subscribe(data=>{
       this.getProducts()
     },
      (err) => {
        console.log(err);
        
      }
     )
     
    }
   
   // this.backProduct.deleteProduct(id)
  }
/*
  editProduct(product:modelProducts){
this.backProduct.selectedProduct=product

  }
  */
}
