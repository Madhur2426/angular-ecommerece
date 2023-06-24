import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pixel7Component } from './pixel7.component';

describe('Pixel7Component', () => {
  let component: Pixel7Component;
  let fixture: ComponentFixture<Pixel7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pixel7Component]
    });
    fixture = TestBed.createComponent(Pixel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
