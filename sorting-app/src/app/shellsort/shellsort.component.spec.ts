import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellsortComponent } from './shellsort.component';

describe('ShellsortComponent', () => {
  let component: ShellsortComponent;
  let fixture: ComponentFixture<ShellsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellsortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
