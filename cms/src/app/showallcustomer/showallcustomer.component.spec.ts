import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallcustomerComponent } from './showallcustomer.component';

describe('ShowallcustomerComponent', () => {
  let component: ShowallcustomerComponent;
  let fixture: ComponentFixture<ShowallcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
