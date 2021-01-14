import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryListComponent } from './order-history-list.component';

describe('OrderHistoryListComponent', () => {
  let component: OrderHistoryListComponent;
  let fixture: ComponentFixture<OrderHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
