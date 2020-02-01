import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprofsComponent } from './gestionprofs.component';

describe('GestionprofsComponent', () => {
  let component: GestionprofsComponent;
  let fixture: ComponentFixture<GestionprofsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionprofsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionprofsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
