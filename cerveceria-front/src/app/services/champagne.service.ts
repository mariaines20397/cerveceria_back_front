import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampagneService {
/**
   * Array que contiene el tamaño de champagne, el id de cada elemento, el tipo de elemento
   * que se pasará en el input y el estado del checked del checkbox que inicialmente se lo 
   * coloca en false
   */
 champagneFilter:any[]=[
  {name:'0,75 l', id:1, type: "checkbox", checked:false}, 
  {name:'1 l', id:2, type: "checkbox", checked:false},
  {name:'1,5 l', id:3, type: "checkbox", checked:false}
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
   * Obtiene los datos del arreglo champagneFilter
   * @returns 
   */
 obtenerChampagneFilter(){
  return this.champagneFilter
}
/**
  * Obtiene los datos del arreglo priceFilter
  * @returns 
  */

 obtenerPriceFilter(){
  return this.priceFilter
}
}
