/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePositionComponent } from './home-position.component';

describe('HomePositionComponent', () => {
  let component: HomePositionComponent;
  let fixture: ComponentFixture<HomePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
