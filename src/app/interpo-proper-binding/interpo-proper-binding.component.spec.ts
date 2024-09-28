import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpoProperBindingComponent } from './interpo-proper-binding.component';

describe('InterpoProperBindingComponent', () => {
  let component: InterpoProperBindingComponent;
  let fixture: ComponentFixture<InterpoProperBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpoProperBindingComponent]
    });
    fixture = TestBed.createComponent(InterpoProperBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
