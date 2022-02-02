import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/front/about-us/about-us.component';
import { AddProductComponent } from './components/back/add-product/add-product.component';
import { BeerComponent } from './components/front/beer/beer.component';
import { CarritoComponent } from './components/front/carrito/carrito.component';
import { ChampagneComponent } from './components/front/champagne/champagne.component';
import { ContactComponent } from './components/front/contact/contact.component';
import { CoverageComponent } from './components/front/coverage/coverage.component';
import { ErrorComponent } from './components/front/error/error.component';
import { GetProductComponent } from './components/back/get-product/get-product.component';
import { HomeComponent } from './components/front/home/home.component';
import { HowtocallComponent } from './components/front/howtocall/howtocall.component';
import { ProviderComponent } from './components/front/provider/provider.component';
import { SecurityComponent } from './components/front/security/security.component';
import { VodkaComponent } from './components/front/vodka/vodka.component';

const routes: Routes = [
  {path:'',component: HomeComponent, pathMatch:'full'},
  {path: 'addProduct',component: AddProductComponent},
  {path: 'getProduct',component: GetProductComponent},
  {path: 'editProduct/:id',component: AddProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'carrito/:id', component: CarritoComponent},
  {path: 'cart', component: CarritoComponent},
  {path: 'beer', component: BeerComponent},
  {path: 'vodka', component: VodkaComponent},
  {path: 'security-covid', component: SecurityComponent},
  {path: 'howToCall', component: HowtocallComponent},
  {path: 'provider', component: ProviderComponent},
  {path: 'coverage-area', component: CoverageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'champagne', component: ChampagneComponent},
  {path: '**', component: ErrorComponent, pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
