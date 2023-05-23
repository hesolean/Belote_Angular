import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionPartieComponent } from './definition-partie.component';

describe('DefinitionPartieComponent', () => {
  let component: DefinitionPartieComponent;
  let fixture: ComponentFixture<DefinitionPartieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefinitionPartieComponent]
    });
    fixture = TestBed.createComponent(DefinitionPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
