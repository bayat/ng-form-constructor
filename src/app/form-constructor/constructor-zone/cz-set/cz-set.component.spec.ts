/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CzSetComponent } from './cz-set.component';

describe('CzSetComponent', () => {
  let component: CzSetComponent;
  let fixture: ComponentFixture<CzSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CzSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CzSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
