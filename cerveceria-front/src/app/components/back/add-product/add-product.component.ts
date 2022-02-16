import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { modelProducts } from 'src/app/models/product';
import { BackProductService } from 'src/app/services/back-product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product:modelProducts
  constructor(public backProduct:BackProductService) { 
   
  this.product=this.backProduct.selectedProduct
  }

  ngOnInit(): void {
  }
 
  addProduct(form:NgForm){
    this.backProduct.createProduct(form.value).subscribe(
      res=> console.log(res),
      err=> console.log(err)
      )
    
  }
 
}
