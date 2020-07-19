import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialDynamicTableComponent } from './ngx-material-dynamic-table.component';

describe('NgxMaterialDynamicTableComponent', () => {
  let component: NgxMaterialDynamicTableComponent;
  let fixture: ComponentFixture<NgxMaterialDynamicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialDynamicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
