import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDateTimeComponent } from './service-date-time.component';

describe('ServiceDateTimeComponent', () => {
  let component: ServiceDateTimeComponent;
  let fixture: ComponentFixture<ServiceDateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDateTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
