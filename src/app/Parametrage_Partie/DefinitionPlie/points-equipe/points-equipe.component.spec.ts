import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsEquipeComponent } from './points-equipe.component';

describe('PointsEquipeComponent', () => {
  let component: PointsEquipeComponent;
  let fixture: ComponentFixture<PointsEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointsEquipeComponent]
    });
    fixture = TestBed.createComponent(PointsEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
