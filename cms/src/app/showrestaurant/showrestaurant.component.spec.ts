import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrestaurantComponent } from './showrestaurant.component';

describe('ShowrestaurantComponent', () => {
  let component: ShowrestaurantComponent;
  let fixture: ComponentFixture<ShowrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowrestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
