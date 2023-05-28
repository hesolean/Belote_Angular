import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapPointsComponent } from './recap-points.component';

describe('RecapPointsComponent', () => {
  let component: RecapPointsComponent;
  let fixture: ComponentFixture<RecapPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecapPointsComponent]
    });
    fixture = TestBed.createComponent(RecapPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
