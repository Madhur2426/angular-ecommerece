import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motog82Component } from './motog82.component';

describe('Motog82Component', () => {
  let component: Motog82Component;
  let fixture: ComponentFixture<Motog82Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Motog82Component]
    });
    fixture = TestBed.createComponent(Motog82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
