import { ComponentFixture, TestBed } from '@angular/core/testing';

import { budgetIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: budgetIndexComponent;
  let fixture: ComponentFixture<budgetIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ budgetIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(budgetIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
