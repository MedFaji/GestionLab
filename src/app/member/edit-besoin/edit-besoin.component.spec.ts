import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBesoinComponent } from './edit-besoin.component';

describe('EditBesoinComponent', () => {
  let component: EditBesoinComponent;
  let fixture: ComponentFixture<EditBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
