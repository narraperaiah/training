import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcustomerwalletComponent } from './showcustomerwallet.component';

describe('ShowcustomerwalletComponent', () => {
  let component: ShowcustomerwalletComponent;
  let fixture: ComponentFixture<ShowcustomerwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcustomerwalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcustomerwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
