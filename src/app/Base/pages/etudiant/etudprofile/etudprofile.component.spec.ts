import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudprofileComponent } from './etudprofile.component';

describe('EtudprofileComponent', () => {
  let component: EtudprofileComponent;
  let fixture: ComponentFixture<EtudprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
