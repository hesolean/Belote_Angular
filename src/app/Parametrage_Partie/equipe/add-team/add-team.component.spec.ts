import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipeComponent } from './add-team.component';

describe('AddEquipeComponent', () => {
  let component: AddEquipeComponent;
  let fixture: ComponentFixture<AddEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEquipeComponent]
    });
    fixture = TestBed.createComponent(AddEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});