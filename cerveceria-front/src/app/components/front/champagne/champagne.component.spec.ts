import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampagneComponent } from './champagne.component';

describe('ChampagneComponent', () => {
  let component: ChampagneComponent;
  let fixture: ComponentFixture<ChampagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampagneComponent);
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
