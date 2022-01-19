import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingsortComponent } from './countingsort.component';

describe('CountingsortComponent', () => {
  let component: CountingsortComponent;
  let fixture: ComponentFixture<CountingsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingsortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
