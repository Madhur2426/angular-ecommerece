import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogledetailsComponent } from './googledetails.component';

describe('GoogledetailsComponent', () => {
  let component: GoogledetailsComponent;
  let fixture: ComponentFixture<GoogledetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogledetailsComponent]
    });
    fixture = TestBed.createComponent(GoogledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
