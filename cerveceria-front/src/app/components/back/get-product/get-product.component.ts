import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { modelProducts } from 'src/app/models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BackProductService } from 'src/app/services/back-product.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.scss']
})
export class GetProductComponent implements OnInit {
  product:modelProducts

  constructor(public backProduct:BackProductService, public modal:NgbModal) {
  this.product=this.backProduct.selectedProduct

   }

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
     this.backProduct.deleteProduct(id).subscribe(
      (res) =>{console.log(res);
      

      },
      (err) => {
        console.log(err);
        
      }
     )
     
    }
   return window.location.reload()
   // this.backProduct.deleteProduct(id)
  }

  editProduct(product:modelProducts){
console.log(product);
this.backProduct.selectedProduct=product


  }
  updateProduct(form:NgForm){
    if (form.value._id) {
      this.backProduct.putProduct(form.value).subscribe(
        (res)=>console.log(res),
        (err)=>console.log(err)
        
        
      )
    }
    return window.location.reload()
  }
  
}
