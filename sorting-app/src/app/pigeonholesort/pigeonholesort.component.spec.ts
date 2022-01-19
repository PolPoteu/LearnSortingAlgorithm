import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigeonholesortComponent } from './pigeonholesort.component';

describe('PigeonholesortComponent', () => {
  let component: PigeonholesortComponent;
  let fixture: ComponentFixture<PigeonholesortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigeonholesortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PigeonholesortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
