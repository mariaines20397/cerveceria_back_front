import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerComponent } from './beer.component';

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('clear',()=>{
    let clear= component.clear()
     expect(clear).not.toBeTruthy()
   })
   it('clearPrice',()=>{
     let clearPrice= component.clearPrice()
     expect(clearPrice).not.toBeTruthy()
   })
   it('filtrar',()=>{
     
      expect(component.filtrar).toBeDefined()
      
    })
    it('activarBtn',()=>{
     let btn= component.activarBtn();
     
     expect(btn).not.toBeTruthy()
    
    })
    it('activarBtnPrice',()=>{
     let btnPrice= component.activarBtnPrice;
     
     expect(btnPrice).toBeTruthy()
    
    })
    it('filtrarPrice',()=>{
     
     expect(component.filtrarPrice).toBeDefined()
     
   })
});
