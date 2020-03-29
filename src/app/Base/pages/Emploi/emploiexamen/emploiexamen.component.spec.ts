import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiexamenComponent } from './emploiexamen.component';

describe('EmploiexamenComponent', () => {
  let component: EmploiexamenComponent;
  let fixture: ComponentFixture<EmploiexamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiexamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
