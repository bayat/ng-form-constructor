/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FieldElementComponent } from './field-element.component';

describe('FieldElementComponent', () => {
  let component: FieldElementComponent;
  let fixture: ComponentFixture<FieldElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
