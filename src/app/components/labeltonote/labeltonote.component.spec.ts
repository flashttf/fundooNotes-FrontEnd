import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeltonoteComponent } from './labeltonote.component';

describe('LabeltonoteComponent', () => {
  let component: LabeltonoteComponent;
  let fixture: ComponentFixture<LabeltonoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeltonoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeltonoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
