import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('chart',()=>{
    expect(component.chart).toBeDefined()
  })
  it('call',()=>{
    expect(component.call).toBeDefined()
  })
  it('aboutUs',()=>{
    expect(component.aboutUs).toBeDefined()
  })
  it('security',()=>{
    expect(component.security).toBeDefined()
  })
  it('howToCall',()=>{
    expect(component.howToCall).toBeDefined()
  })
  it('provider',()=>{
    expect(component.provider).toBeDefined()
  })
  it('contact',()=>{
    expect(component.contact).toBeDefined()
  })
  it('coverage',()=>{
    expect(component.coverage).toBeDefined()
  })
  it('politics',()=>{
    expect(component.politics).toBeDefined()
  })
  
});
