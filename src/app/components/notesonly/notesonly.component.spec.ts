import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesonlyComponent } from './notesonly.component';

describe('NotesonlyComponent', () => {
  let component: NotesonlyComponent;
  let fixture: ComponentFixture<NotesonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
