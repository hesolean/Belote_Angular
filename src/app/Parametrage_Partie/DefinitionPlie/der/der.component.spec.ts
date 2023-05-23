import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerComponent } from './der.component';

describe('DerComponent', () => {
  let component: DerComponent;
  let fixture: ComponentFixture<DerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DerComponent]
    });
    fixture = TestBed.createComponent(DerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
