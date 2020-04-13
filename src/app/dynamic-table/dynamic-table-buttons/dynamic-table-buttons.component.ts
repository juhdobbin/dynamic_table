import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { buttonsConfig } from './dynamic-table-buttons.config';

@Component({
  selector: 'app-dynamic-table-buttons',
  templateUrl: './dynamic-table-buttons.component.html',
  styleUrls: ['./dynamic-table-buttons.component.scss']
})
export class DynamicTableButtonsComponent implements OnInit {
  @Input() actions;
  @Input() permissionsList;
  @Input() buttonsConfig = buttonsConfig;
  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendActionClick(action) {
    this.buttonClicked.emit(action);
  }
}
