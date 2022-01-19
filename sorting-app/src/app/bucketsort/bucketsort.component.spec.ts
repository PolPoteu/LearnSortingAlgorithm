import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketsortComponent } from './bucketsort.component';

describe('BucketsortComponent', () => {
  let component: BucketsortComponent;
  let fixture: ComponentFixture<BucketsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketsortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
