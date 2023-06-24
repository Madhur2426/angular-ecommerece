import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorolaComponent } from './motorola.component';

describe('MotorolaComponent', () => {
  let component: MotorolaComponent;
  let fixture: ComponentFixture<MotorolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorolaComponent]
    });
    fixture = TestBed.createComponent(MotorolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
