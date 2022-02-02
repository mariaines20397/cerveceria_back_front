import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { modelProducts } from 'src/app/models/product';
import { BackProductService } from 'src/app/services/back-product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
//titulo='CREAR PRODUCTO';
id:string | null;
product:modelProducts
productForm:FormGroup;
  constructor(public backProduct:BackProductService, public fb:FormBuilder, public aRoute:ActivatedRoute) { 
    this.productForm=this.fb.group({
      id_product : [0, Validators.required],
    name:['', Validators.required],
    description:['', Validators.required],
    type_product:['', Validators.required],
    price:[0, Validators.required],
    img:['', Validators.required]
    })
  this.id=this.aRoute.snapshot.paramMap.get('id')
  this.product=this.backProduct.selectedProduct
  }

  ngOnInit(): void {
    this.editProduct()
  }

  addProduct(form:NgForm){
    this.backProduct.createProduct(form.value).subscribe(
      res=> console.log(res),
      err=> console.log(err)
      )
    
  }
  editProduct(){
  if (this.id !== null) {
   // this.titulo='Editar Producto'
    this.backProduct.putProduct(this.id, this.product).subscribe(data=>{
      this.productForm.patchValue({
        id_product:data.id_product,
        name:data.name,
        description:data.description,
        type_product:data.type_product,
        price:data.price,
        img:data.img
      })
    })
  }
  }
}
