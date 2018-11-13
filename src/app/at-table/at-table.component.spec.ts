import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTableComponent } from './at-table.component';

describe('AtTableComponent', () => {
  let component: AtTableComponent;
  let fixture: ComponentFixture<AtTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
