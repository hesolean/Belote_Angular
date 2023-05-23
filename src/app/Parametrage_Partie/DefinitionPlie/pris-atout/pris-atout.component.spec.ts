import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisAtoutComponent } from './pris-atout.component';

describe('PrisAtoutComponent', () => {
  let component: PrisAtoutComponent;
  let fixture: ComponentFixture<PrisAtoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrisAtoutComponent]
    });
    fixture = TestBed.createComponent(PrisAtoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
