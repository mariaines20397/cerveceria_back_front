import { Component, OnInit } from '@angular/core';
import { ChampagneService } from '../../../services/champagne.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackProductService } from '../../../services/back-product.service'

@Component({
  selector: 'app-champagne',
  templateUrl: './champagne.component.html',
  styleUrls: ['./champagne.component.scss']
})
export class ChampagneComponent implements OnInit {

  /**
     * Array para traer los valores de champagneFilter desde el servicio
     */

  champagneFilter: any[] = []
  /**
   * Array para traer los valores de priceFilter desde el servicio
   */

  priceFilter: any[] = [];



  constructor(public modal: NgbModal, public champagneService: ChampagneService, public backProduct: BackProductService) {
    this.champagneFilter = this.champagneService.obtenerChampagneFilter()
    this.priceFilter = this.champagneService.obtenerPriceFilter()
  }
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.backProduct.getProducts().subscribe(
      res => {
        this.backProduct.products = res
      },
      err => console.log(err)
    )
  }

  /**
   * Funcion Filtrar, filtra los elementos según el tamaño de champagne que el usuario seleccione.
   * 
   * Verifica si hay algún check seleccionado. Si es true, entonces guarda en un arreglo
   * vacio los elementos que se filtraron con el método filter() en donde se pregunta si 
   * el id del archivo beer.ts es igual al valor del checkbox seleccionado.
   * Luego, mediante un foreach se recorre el arreglo champagneFilter y se pregunta si
   * el valor del check es igual al id de una posicion del arreglo. Si es asi entonces se 
   * cambia el valor de checked a true indicando que el check fue seleccionado, siendo que 
   * en un principio estaba en false (valor inicializado en el arreglo). Luego se lo deja vacio
   * al array arrChampagne que  en un principio contenia todo el listado de productos que se
   * mostraba en pantalla.
   * Despues se hace un push a un nuevo arreglo(newArray) con los valores que se almacenaron
   * en type_product al principio para que luego este arreglo sea iterado por dos for
   * para recorrer el array de objetos. Por último, se hace un push a arrChampagne con los elementos 
   * resultado de los iteradores.
   * 
   * @param event Evento usado para luego obtener los valores que tienen el checked 
   * y el value del input
   */

  filtrar(event: any) {
    if (event.target.checked) {
      const allProduct = this.backProduct.products
      const champagne = allProduct.filter(data => data.id_product == 3)
      const filter = champagne.filter(data => data.type_product == event.target.value)


      this.champagneFilter.forEach(function (check) {
        if (event.target.value == check.id) {
          check.checked = true;
        }
      })
      this.backProduct.products = filter


    }
  }
  /**
* Esta funcion activa el boton de clear cuando se activa un checkbox del filtrado del tamaño de champagne.
* Primero recorre con un foreach el arreglo champagneFilter, se pregunta si algun check es true, entonces toma el elemento con 
* el id clear y cambia el valor de disabled a false 
* @param event Evento usado para luego obtener los valores que tienen el checked 
*/
  activarBtn() {
    this.champagneFilter.forEach(function (check) {
      if (check.checked) {
        (<HTMLInputElement>document.getElementById('clear')).disabled = false

      }
    })


  }
  /**
   * Parecido a la funcion clearPrice, pero esta funcion recorre con un foreach el array
   * champagneFilter y verifica si el checked esta en true, si es asi, le cambia el valor a 
   * false 
   * 
   */
  clear() {

    this.champagneFilter.forEach(function (check) {
      if (check.checked) {
        check.checked = false


      }
    })
    return this.getProducts()
  }
  /**
   * Parecido a la funcion filtrar pero filtrarPrice filtra los elementos por precio
   * @param event Evento usado para luego obtener los valores que tienen el checked 
    * y el value del input
   */
  filtrarPrice(event: any) {

    if (event.target.checked) {
      const allProduct = this.backProduct.products
      const champagne = allProduct.filter(data => data.id_product == 3)
      const filter = champagne.filter(data => data.price < event.target.value)

      this.priceFilter.forEach(function (check) {


        if (event.target.value == check.id) {
          check.checked = true;


        }
      })
      this.backProduct.products = filter


    }

  }
  /**
 * Esta funcion activa el boton de clearPrice cuando se activa un checkbox del filtrado por precio.
 * Primero se pregunta si algun check es true, entonces toma el elemento con 
 * el id clearPrice y cambia el valor de disabled a false 
 * @param event Evento usado para luego obtener los valores que tienen el checked 
 * 
 */

  activarBtnPrice(event: any) {

    if (event.target.checked) {
      (<HTMLInputElement>document.getElementById('clearPrice')).disabled = false


    }
  }
  /**
     * La funcion clearPrice recorre con un foreach el arreglo priceFilter. Luego pregunta
     * si algun check esta activado, de ser asi, al presionar el boton de limpiar llamará a
     * esta función y colocará en false el checked de los checkbox.
     */
  clearPrice() {

    this.priceFilter.forEach(function (check) {


      if (check.checked == true) {
        check.checked = false
      }
    })
    return this.getProducts()
  }
}
