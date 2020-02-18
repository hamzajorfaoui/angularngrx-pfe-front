import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchetudiantComponent } from './searchetudiant.component';

describe('SearchetudiantComponent', () => {
  let component: SearchetudiantComponent;
  let fixture: ComponentFixture<SearchetudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchetudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
