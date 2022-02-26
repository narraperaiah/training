import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpendingsComponent } from './vendorpendings.component';

describe('VendorpendingsComponent', () => {
  let component: VendorpendingsComponent;
  let fixture: ComponentFixture<VendorpendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorpendingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
