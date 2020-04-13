import { Component, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnChanges {
  @Input() dataSource;
  @Input() displayedColumns;
  @Input() actions: any = [];
  @Input() configEditRow;
  @Input() filter = true;
  @Input() buttonAddNewItem = false;
  @Input() buttonExport = false;
  @Input() componentName;
  @Output() sendClick = new EventEmitter();

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatTable<any>;

  public loading = true;
  public action = false;
  public displayedColumnsObject: any[] = [];
  public dados;


  constructor() { }

  ngOnChanges(): void {
    if (this.displayedColumns) {
      this.createColumns();

    }
    if (this.dataSource) {
      this.createDatasource();

    }
  }

  createDatasource() {
    // this.loading = false;
    this.dados = new MatTableDataSource<any>(this.dataSource);
    this.dados.paginator = this.paginator;
    this.dados.sort = this.sort;
  }

  createColumns() {
    this.displayedColumnsObject = this.displayedColumns.map(col => typeof col.column === 'number' ? col.column.toString() : col.column)
  }
  sendAction(action, row, index){
    const content:any = {action, row, index};
    this.sendClick.emit(content);
  }

}
