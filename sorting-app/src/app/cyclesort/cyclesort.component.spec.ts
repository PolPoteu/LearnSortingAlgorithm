import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclesortComponent } from './cyclesort.component';

describe('CyclesortComponent', () => {
  let component: CyclesortComponent;
  let fixture: ComponentFixture<CyclesortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyclesortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclesortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
