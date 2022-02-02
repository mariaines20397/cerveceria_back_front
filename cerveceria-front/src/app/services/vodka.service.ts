import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VodkaService {
/**
   * Array que contiene el tipo de vodka, el id de cada elemento, el tipo de elemento
   * que se pasará en el input y el estado del checked del checkbox que inicialmente se lo 
   * coloca en false
   */
 vodkaFilter:any[]=[
  {name:'Absolut', id:1, type: "checkbox", checked:false}, 
  {name:'Bols', id:2, type: "checkbox", checked:false},
  {name:'Sernova', id:3, type: "checkbox", checked:false},
  {name:'Skyy', id:4, type: "checkbox", checked:false},
  {name:'Smirnoff', id:5, type: "checkbox", checked:false}
 ];
 /**
 * Array que contiene el nombre que se mostrara en el modal, el id de cada elemento, 
 * el tipo de elemento que se pasará en el input y el estado del checked del checkbox 
 * que inicialmente se lo coloca en false
 */
  priceFilter:any[]=[
    {name:'Menor a $20000', id:20000, type: "checkbox", checked:false}, 
    {name:'Menor a $40000', id:40000, type: "checkbox", checked:false},
    {name:'Menor a $700000', id:70000, type: "checkbox", checked:false}
   ];
  constructor() { }
  /**
   * Obtiene los datos del arreglo vodkaFilter
   * @returns 
   */
 obtenerVodkaFilter(){
  return this.vodkaFilter
}
/**
  * Obtiene los datos del arreglo priceFilter
  * @returns 
  */

 obtenerPriceFilter(){
  return this.priceFilter
}
}
