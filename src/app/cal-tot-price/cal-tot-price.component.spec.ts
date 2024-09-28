import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalTotPriceComponent } from './cal-tot-price.component';

describe('CalTotPriceComponent', () => {
  let component: CalTotPriceComponent;
  let fixture: ComponentFixture<CalTotPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalTotPriceComponent]
    });
    fixture = TestBed.createComponent(CalTotPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
