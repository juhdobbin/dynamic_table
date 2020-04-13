import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableButtonsComponent } from './dynamic-table-buttons.component';

describe('DynamicTableButtonsComponent', () => {
  let component: DynamicTableButtonsComponent;
  let fixture: ComponentFixture<DynamicTableButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
