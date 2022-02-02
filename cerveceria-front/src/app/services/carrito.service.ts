import { Injectable, EventEmitter,Output } from '@angular/core';
import { beer } from '../components/front/beer/beer';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
@Output() transportandoProductos= new EventEmitter();
  constructor() { }
beer:any=beer
  obtenerProduct(id:number){
   return this.beer[id]
  }
}
