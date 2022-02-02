import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { beer } from '../beer/beer';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  /**
   * Variable que almecena el lenguaje activo 
   */
  public activeLang;
  /**
   * Variable boolean que ayudará a saber su fue seleccionado el menu 
   */
  menu=false;
  constructor(public modal:NgbModal, private translate:TranslateService, public productService:ProductService ) { 
    
    this.activeLang = this.translate.currentLang
  }

  ngOnInit(): void {
    
  }
  /**
   * Función usada para traducir la pagina
   */

  
  public changeLang(lang:string) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
  /**
   * Función que cambia el valor de menu cuando sea clickeado.
   */
  public Menu() {
    if (this.menu==false) {
      this.menu=true
    }else{
      this.menu=false
    }
  }
}
