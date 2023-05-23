import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionPlieComponent } from './definition-plie.component';

describe('DefinitionPlieComponent', () => {
  let component: DefinitionPlieComponent;
  let fixture: ComponentFixture<DefinitionPlieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefinitionPlieComponent]
    });
    fixture = TestBed.createComponent(DefinitionPlieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
