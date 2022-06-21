import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBesoinComponent } from './index-besoin.component';

describe('IndexBesoinComponent', () => {
  let component: IndexBesoinComponent;
  let fixture: ComponentFixture<IndexBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
