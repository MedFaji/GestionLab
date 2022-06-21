import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBesoinComponent } from './view-besoin.component';

describe('ViewBesoinComponent', () => {
  let component: ViewBesoinComponent;
  let fixture: ComponentFixture<ViewBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
