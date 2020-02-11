import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabactualiteComponent } from './tabactualite.component';

describe('TabactualiteComponent', () => {
  let component: TabactualiteComponent;
  let fixture: ComponentFixture<TabactualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabactualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabactualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
