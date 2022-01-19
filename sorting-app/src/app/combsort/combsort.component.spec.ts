import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombsortComponent } from './combsort.component';

describe('CombsortComponent', () => {
  let component: CombsortComponent;
  let fixture: ComponentFixture<CombsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombsortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
