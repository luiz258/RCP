import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentPage } from './list-document.page';

describe('ListDocumentPage', () => {
  let component: ListDocumentPage;
  let fixture: ComponentFixture<ListDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDocumentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
