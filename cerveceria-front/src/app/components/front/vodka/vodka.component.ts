import { Component, OnInit } from '@angular/core';
import { VodkaService } from '../../../services/vodka.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import	{vodka} from './vodka'

@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.component.html',
  styleUrls: ['./vodka.component.scss']
})
export class VodkaComponent implements OnInit {
/**
* Array para traer los valores de vodkaFilter desde el servicio
*/
   
 vodkaFilter:any[]=[]
 /**
  * Array para traer los valores de priceFilter desde el servicio
  */
  
  priceFilter:any[]=[];
  /**
   * Array que contiene los elementos de vodka.ts usado en la funcion de filtrar y 
   * filtrarPrice, tambien usado para mostrar los elementos en pantalla
   * 
   */
   arrVodka:any []=vodka
   /**
    * Array que contiene los elementos de vodka.ts usado en el metodo filter, aplicado
    * en la funcion de filtrar y filtrarPrice. Esto es asi porque si el usuario quiere 
    * filtrar por dos precios o por dos tipos de vodka entonces podra hacerlo.
    */
   arrVodkaNew:any []=vodka
   /**
    * Guarda el resultado que se arroje luego de aplicar el metodo filter() en la funcion
    * filtrar y filtrarPrice. Luego es usado como parametro del metodo push aplicado en 
    * newArray.
    */
   type_vodka:any=[]
   /**
    * Este arreglo contendrá el valor de type_vodka. Será usado en las funciones de 
    * filtrar y filtrarPrice para ser recorrido por for.
    */
   newArray:any=[]

  constructor(public modal:NgbModal, public vodkaService:VodkaService) {
    this.vodkaFilter=this.vodkaService.obtenerVodkaFilter()
    this.priceFilter=this.vodkaService.obtenerPriceFilter()
  }
  ngOnInit(): void {
  }

    /**
     * Funcion Filtrar, filtra los elementos según el tipo de vodka que el usuario seleccione.
     * 
     * Verifica si hay algún check seleccionado. Si es true, entonces guarda en un arreglo
     * vacio los elementos que se filtraron con el método filter() en donde se pregunta si 
     * el id del archivo vodka.ts es igual al valor del checkbox seleccionado.
     * Luego, mediante un foreach se recorre el arreglo productFilter y se pregunta si
     * el valor del check es igual al id de una posicion del arreglo. Si es asi entonces se 
     * cambia el valor de checked a true indicando que el check fue seleccionado, siendo que 
     * en un principio estaba en false (valor inicializado en el arreglo). Luego se lo deja vacio
     * al array arrProducts que  en un principio contenia todo el listado de productos que se
     * mostraba en pantalla.
     * Despues se hace un push a un nuevo arreglo(newArray) con los valores que se almacenaron
     * en type_vodka al principio para que luego este arreglo sea iterado por dos for
     * para recorrer el array de objetos. Por último, se hace un push a arrVodka con los elementos 
     * resultado de los iteradores.
     * 
     * @param event Evento usado para luego obtener los valores que tienen el checked 
     * y el value del input
     */
 
     filtrar(event:any) {
      if (event.target.checked ) {
       
        
        this.type_vodka=this.arrVodkaNew.filter(filter_id => filter_id.filterId == event.target.value) 
        this.vodkaFilter.forEach(function(check){
          if (event.target.value== check.id) {
            check.checked=true;
          }
         }) 
        this.arrVodka=[]
        this.newArray.push( this.type_vodka)
        for (let i = 0; i < this.newArray.length; i++) {
          const mostrarArray = this.newArray[i];
          for (let i = 0; i < mostrarArray.length; i++) {
            const obj = mostrarArray[i];
           this.arrVodka.push(obj)
          }
         
        }
        
      }
    }
    /**
    * Parecido a la funcion clearPrice, pero esta funcion recorre con un foreach el array
    * vodkaFilter y verifica si el checked esta en true, si es asi, le cambia el valor a 
    * false 
    * 
    */
   clear(){
     
    this.vodkaFilter.forEach(function(check){
   if (check.checked) {
     check.checked=false  
     
     
    }
  })
  }
  /**
  * Esta funcion activa el boton de clear cuando se activa un checkbox del filtrado de tipo
  * de vodka.
  * Primero recorre con un foreach el arreglo vodkaFilter, se pregunta si algun check es true, entonces toma el elemento con 
  * el id clear y cambia el valor de disabled a false 
  * @param event Evento usado para luego obtener los valores que tienen el checked 
  */
   activarBtn(){
    this.vodkaFilter.forEach(function(check){
      if (check.checked) {
     (<HTMLInputElement>document.getElementById('clear')).disabled=false
     
      }
     }) 

     
  }
  /**
    * Parecido a la funcion filtrar pero filtrarPrice filtra los elementos por precio
    * @param event Evento usado para luego obtener los valores que tienen el checked 
     * y el value del input
    */
   filtrarPrice(event:any) {
    
    if (event.target.checked ) {
      this.type_vodka=this.arrVodkaNew.filter(filter_price => filter_price.price < event.target.value) 
      this.priceFilter.forEach(function(check){
       
        
        if (event.target.value== check.id) {
          check.checked=true;
         
          
        }
       }) 
      this.arrVodka=[]
      this.newArray=[]
      this.newArray.push( this.type_vodka)
      for (let i = 0; i < this.newArray.length; i++) {
        const mostrarArray = this.newArray[i];
        for (let i = 0; i < mostrarArray.length; i++) {
          const obj = mostrarArray[i];
         this.arrVodka.push(obj)
        }
       
      }
      
    }
    
  }
  /**
  * Esta funcion activa el boton de clearPrice cuando se activa un checkbox del filtrado por precio.
  * Primero se pregunta si algun check es true, entonces toma el elemento con 
  * el id clearPrice y cambia el valor de disabled a false 
  * @param event Evento usado para luego obtener los valores que tienen el checked 
  * 
  */
  
   activarBtnPrice(event:any){
     
    if (event.target.checked ) {
   (<HTMLInputElement>document.getElementById('clearPrice')).disabled=false
   
   
    }
}
 /**
    * La funcion clearPrice recorre con un foreach el arreglo priceFilter. Luego pregunta
    * si algun check esta activado, de ser asi, al presionar el boton de limpiar llamará a
    * esta función y colocará en false el checked de los checkbox.
    */
  clearPrice(){
     
    this.priceFilter.forEach(function(check){
      
      
      if (check.checked==true) {
        check.checked=false
      }
    })
  
  }
}
