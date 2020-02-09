import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TABetudiantComponent } from './tabetudiant.component';

describe('TABetudiantComponent', () => {
  let component: TABetudiantComponent;
  let fixture: ComponentFixture<TABetudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TABetudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TABetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
