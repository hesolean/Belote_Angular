import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPointsComponent } from './display-points.component';

describe('DisplayPointsComponent', () => {
  let component: DisplayPointsComponent;
  let fixture: ComponentFixture<DisplayPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPointsComponent]
    });
    fixture = TestBed.createComponent(DisplayPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
