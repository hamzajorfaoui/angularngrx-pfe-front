import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploidutempsComponent } from './emploidutemps.component';

describe('EmploidutempsComponent', () => {
  let component: EmploidutempsComponent;
  let fixture: ComponentFixture<EmploidutempsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploidutempsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploidutempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
