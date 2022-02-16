import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { beer } from './beer';
import { ProductService } from '../../../services/product.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { CarritoService } from '../../../services/carrito.service';
import { BackProductService } from '../../../services/back-product.service'

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  /**
   * Array para traer los valores de productFilter desde el servicio
   */

  productFilter: any[] = []
  /**
   * Array para traer los valores de priceFilter desde el servicio
   */

  priceFilter: any[] = [];
  /**
   * Array que contendrá el resultado del filter
   */
  carrito: any[] = []
  /**
   * Array que contendrá la cantidad de productos seleccionados para agregar al carrito
   */
  arrCarrito: any[] = [];



  /**
   * Se pasa como parametro del constructor el modal y el servicio
   * @param modal Parametro de tipo NgbModal
   * @param productService Parametro de tipo ProductService
   */

  constructor(public modal: NgbModal, public productService: ProductService, public backProduct: BackProductService) {
    this.productFilter = this.productService.obtenerProductFilter()
    this.priceFilter = this.productService.obtenerPriceFilter()


  }

  ngOnInit(): void { this.getProducts() }

  getProducts() {
    this.backProduct.getProducts().subscribe(
      res => {
        this.backProduct.products = res

      },
      err => console.log(err)
    )
  }

  /**
   * Funcion Filtrar, filtra los elementos según el tipo de cerveza que el usuario seleccione.
   * 
   * Verifica si hay algún check seleccionado. Si es true, entonces guarda en un arreglo
   * vacio los elementos que se filtraron con el método filter() endonde se pregunta si 
   * el id del archivo product.ts es igual al valor del checkbox seleccionado.
   * Luego, mediante un foreach se recorre el arreglo productFilter y se pregunta si
   * el valor del check es igual al id de una posicion del arreglo. Si es asi entonces se 
   * cambia el valor de checked a true indicando que el check fue seleccionado, siendo que 
   * en un principio estaba en false (valor inicializado en el arreglo). Luego se lo deja vacio
   * al array arrProducts que  en un principio contenia todo el listado de productos que se
   * mostraba en pantalla.
   * Despues se hace un push a un nuevo arreglo(newArray) con los valores que se almacenaron
   * en type_product al principio para que luego este arreglo sea iterado por dos for
   * para recorrer el array de objetos. Por último, se hace un push a arrProducts con los elementos 
   * resultado de los iteradores.
   * 
   * @param event Evento usado para luego obtener los valores que tienen el checked 
   * y el value del input
   */

  filtrar(event: any) {

    if (event.target.checked) {

      const allProduct = this.backProduct.products
      const beer = allProduct.filter(data => data.id_product == 1)
      const filter = beer.filter(data => data.type_product == event.target.value)
      console.log(filter);
      this.productFilter.forEach(function (check) {
        if (event.target.value == check.id) {
          check.checked = true;
        }
      })
      this.backProduct.products = filter


    }
  }
  /**
   * Parecido a la funcion filtrar pero filtrarPrice filtra los elementos por precio
   * @param event Evento usado para luego obtener los valores que tienen el checked 
    * y el value del input
   */
  filtrarPrice(event: any) {

    if (event.target.checked) {
      const allProduct = this.backProduct.products
      const beer = allProduct.filter(data => data.id_product == 1)
      const filter = beer.filter(data => data.price < event.target.value)
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

  /* sumarCarrito(event:any){
    this.type_product=this.arrProductsNew.filter(id => id.id == event.target.value)
    this.arrCarrito=[]
    this.arrCarrito.push(this.type_product)
    for (let i = 0; i < this.arrCarrito.length; i++) {
      const element = this.arrCarrito[i];
      for (let i = 0; i < element.length; i++) {
        const obj = element[i];
        this.arrProductCarrito.push(obj)
      }
    //console.log(this.arrProductCarrito);
     this.carritoService.transportandoProductos.emit({productos : this.arrProductCarrito});
    }
    
     
     
     
   }*/
  /**
   * Esta funcion activa el boton de clear cuando se activa un checkbox del filtrado de tipo
   * de cerveza.
   * Primero recorre con un foreach el arreglo productFilter, se pregunta si algun check es true, entonces toma el elemento con 
   * el id clear y cambia el valor de disabled a false 
   * @param event Evento usado para luego obtener los valores que tienen el checked 
   */
  activarBtn() {
    this.productFilter.forEach(function (check) {
      if (check.checked) {
        (<HTMLInputElement>document.getElementById('clear')).disabled = false

      }
    })


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
  /**
     * Parecido a la funcion clearPrice, pero esta funcion recorre con un foreach el array
     * productFilter y verifica si el checked esta en true, si es asi, le cambia el valor a 
     * false 
     * 
     */
  clear() {

    this.productFilter.forEach(function (check) {
      if (check.checked) {
        check.checked = false


      }
    })
    return this.getProducts()

  }



}
