import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DixDerComponent } from './dix-der.component';

describe('DixDerComponent', () => {
  let component: DixDerComponent;
  let fixture: ComponentFixture<DixDerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DixDerComponent]
    });
    fixture = TestBed.createComponent(DixDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
