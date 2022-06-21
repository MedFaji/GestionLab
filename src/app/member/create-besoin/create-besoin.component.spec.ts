import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBesoinComponent } from './create-besoin.component';

describe('CreateBesoinComponent', () => {
  let component: CreateBesoinComponent;
  let fixture: ComponentFixture<CreateBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
