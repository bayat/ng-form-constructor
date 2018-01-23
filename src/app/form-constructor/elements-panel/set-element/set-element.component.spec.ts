/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetElementComponent } from './set-element.component';

describe('SetElementComponent', () => {
  let component: SetElementComponent;
  let fixture: ComponentFixture<SetElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
