import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmatiereComponent } from './tabmatiere.component';

describe('TabmatiereComponent', () => {
  let component: TabmatiereComponent;
  let fixture: ComponentFixture<TabmatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
