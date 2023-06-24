import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S23UltraComponent } from './s23-ultra.component';

describe('S23UltraComponent', () => {
  let component: S23UltraComponent;
  let fixture: ComponentFixture<S23UltraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S23UltraComponent]
    });
    fixture = TestBed.createComponent(S23UltraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
