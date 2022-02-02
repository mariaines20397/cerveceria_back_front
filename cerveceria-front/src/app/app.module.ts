import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/front/home/home.component';
import { HeaderComponent } from './components/front/header/header.component';
import { FooterComponent } from './components/front/footer/footer.component';
import {ProductService} from './services/product.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactComponent } from './components/front/contact/contact.component';
import { ErrorComponent } from './components/front/error/error.component';
import { SecurityComponent } from './components/front/security/security.component';
import { HowtocallComponent } from './components/front/howtocall/howtocall.component';
import { ProviderComponent } from './components/front/provider/provider.component';
import { CoverageComponent } from './components/front/coverage/coverage.component';
import { ChampagneComponent } from './components/front/champagne/champagne.component';
import { BeerComponent } from './components/front/beer/beer.component';
import { VodkaComponent } from './components/front/vodka/vodka.component';
import { AboutUsComponent } from './components/front/about-us/about-us.component';
import { CarritoComponent } from './components/front/carrito/carrito.component';
import { AddProductComponent } from './components/back/add-product/add-product.component';
import { GetProductComponent } from './components/back/get-product/get-product.component';


export function HttpLoaderFactory(http:HttpClient) {
  return new TranslateHttpLoader(http,'../assets/translate/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
    SecurityComponent,
    HowtocallComponent,
    ProviderComponent,
    CoverageComponent,
    ChampagneComponent,
    BeerComponent,
    VodkaComponent,
    AboutUsComponent,
    CarritoComponent,
    AddProductComponent,
    GetProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'EN',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
