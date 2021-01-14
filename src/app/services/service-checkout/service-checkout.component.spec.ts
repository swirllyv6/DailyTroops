import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCheckoutComponent } from './service-checkout.component';

describe('ServiceCheckoutComponent', () => {
  let component: ServiceCheckoutComponent;
  let fixture: ComponentFixture<ServiceCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
