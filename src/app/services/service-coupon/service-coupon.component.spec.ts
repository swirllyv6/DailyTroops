import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCouponComponent } from './service-coupon.component';

describe('ServiceCouponComponent', () => {
  let component: ServiceCouponComponent;
  let fixture: ComponentFixture<ServiceCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
