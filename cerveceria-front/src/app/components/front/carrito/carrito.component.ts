import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BackProductService } from 'src/app/services/back-product.service';
import { modelProducts } from 'src/app/models/product';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
 id:String
 array:any[]=[]
 arrayNuevo:any[]=[]
 arrayId:any[]=[]
 varId:String
 product:modelProducts
 productCarrito={}
 add:number=1
 cantidad:number
 unitPrice:number
  constructor(public backProduct: BackProductService, private aRouter:ActivatedRoute) {
   this.id=this.aRouter.snapshot.paramMap.get('id')!
   this.varId=this.id
   

  this.product=this.backProduct.selectedProduct
  this.cantidad=1
  this.unitPrice=0

   }

  ngOnInit(): void {
  this.carrito()
  
  }

  carrito(){
    if(this.id!==null){
     /* for (let i = 0; i <= this.arrayId.length; i++) {
        const element = this.arrayId[i].push(this.id)
        console.log('Este es el element',element);
        
      }*/
     this.backProduct.obtenerProduct(this.id).subscribe(data=>
      {
        console.log('Este es el data del producto selleccionado',this.backProduct.selectedProduct=data);
        console.log(this.backProduct.selectedProduct.name);
    
         this.productCarrito={
        "name" : this.backProduct.selectedProduct.name,
        "price":  this.backProduct.selectedProduct.price,
        "img":  this.backProduct.selectedProduct.img
         }
        
      this.arrayNuevo.push(this.productCarrito)
      this.arrayNuevo.forEach(data=>{
        this.array.push(data)
        this.unitPrice=data.price
      })
      console.log(this.array);
    
        
      }
      
      )
      
      
    }
    
    
  }

  addPrice(){
    this.add=this.cantidad
     this.add=this.add+1
    this.cantidad=this.add

    this.arrayNuevo.forEach(data=>{
      data.price = this.unitPrice * this.cantidad
    })
  }

  removePrice(){
    if (this.cantidad>1) {
      let remove=this.cantidad
      remove=remove-1
      this.cantidad=remove
      this.arrayNuevo.forEach(data=>{
        data.price = data.price - this.unitPrice
      })
    }
  }
  
}
