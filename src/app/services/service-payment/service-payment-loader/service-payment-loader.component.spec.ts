import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePaymentLoaderComponent } from './service-payment-loader.component';

describe('ServicePaymentLoaderComponent', () => {
  let component: ServicePaymentLoaderComponent;
  let fixture: ComponentFixture<ServicePaymentLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePaymentLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePaymentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
