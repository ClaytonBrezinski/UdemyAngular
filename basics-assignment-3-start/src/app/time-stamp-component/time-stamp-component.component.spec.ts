import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStampComponentComponent } from './time-stamp-component.component';

describe('TimeStampComponentComponent', () => {
  let component: TimeStampComponentComponent;
  let fixture: ComponentFixture<TimeStampComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeStampComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStampComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
