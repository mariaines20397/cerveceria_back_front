import { Injectable, Output, EventEmitter } from '@angular/core';
import { products } from '../components/front/home/products';
import { HomeComponent } from '../components/front/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Output() disparadorDeProductos: EventEmitter<any> = new EventEmitter()
  /**
   * Array que contiene el tipo de cerveza, el id de cada elemento, el tipo de elemento
   * que se pasará en el input y el estado del checked del checkbox que inicialmente se lo 
   * coloca en false
   */
  productFilter:any[]=[
    {name:'Rubia', id:1, type: "checkbox", checked:false}, 
    {name:'Morena', id:2, type: "checkbox", checked:false},
    {name:'Roja', id:3, type: "checkbox", checked:false}
   ];
   /**
   * Array que contiene el nombre que se mostrara en el modal, el id de cada elemento, 
   * el tipo de elemento que se pasará en el input y el estado del checked del checkbox 
   * que inicialmente se lo coloca en false
   */
    priceFilter:any[]=[
      {name:'Menor a $80000', id:80000, type: "checkbox", checked:false}, 
      {name:'Menor a $90000', id:90000, type: "checkbox", checked:false},
      {name:'Menor a $200000', id:200000, type: "checkbox", checked:false},
      {name:'Menor a $400000', id:400000, type: "checkbox", checked:false}
     ];
  
  constructor() { 

    

  }

  /**
   * Obtiene los datos del arreglo productFilter
   * @returns 
   */
 obtenerProductFilter(){
   return this.productFilter
 }
/**
   * Obtiene los datos del arreglo priceFilter
   * @returns 
   */

  obtenerPriceFilter(){
   return this.priceFilter
 }

  

   

 
}