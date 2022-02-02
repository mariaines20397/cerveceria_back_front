import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtocallComponent } from './howtocall.component';

describe('HowtocallComponent', () => {
  let component: HowtocallComponent;
  let fixture: ComponentFixture<HowtocallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtocallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtocallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
