import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapotComponent } from './capot.component';

describe('CapotComponent', () => {
  let component: CapotComponent;
  let fixture: ComponentFixture<CapotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapotComponent]
    });
    fixture = TestBed.createComponent(CapotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
