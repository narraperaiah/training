import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployreactiveComponent } from './employreactive.component';

describe('EmployreactiveComponent', () => {
  let component: EmployreactiveComponent;
  let fixture: ComponentFixture<EmployreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployreactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
