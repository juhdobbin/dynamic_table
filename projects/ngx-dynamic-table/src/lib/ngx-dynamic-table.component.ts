import {
  Component,
  ViewChild,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export const buttonsConfig = {
  read: {
    icon: 'search',
    name: 'read',
    tooltip: 'Visualizar',
  },
  update: {
    icon: 'edit',
    name: 'edit',
    tooltip: 'Editar',
  },
  delete: {
    icon: 'delete',
    name: 'delete',
    tooltip: 'Excluir',
  },
  download: {
    icon: 'arrow_downward',
    name: 'download',
    tooltip: 'Download',
  },
};
@Component({
  selector: 'lib-ngx-dynamic-table',
  templateUrl: './ngx-dynamic-table.component.html',
  styleUrls: [
    './ngx-dynamic-table.component.scss'
  ],
})
export class NgxDynamicTableComponent implements OnChanges {
  @Input() dataSource;
  @Input() displayedColumns = [];
  @Input() actions;
  @Input() configEditRow;
  @Input() filter = true;
  @Input() buttonAddNewItem = false;
  @Input() buttonExport = false;
  @Input() componentName;

  @Input() buttonsConfig = buttonsConfig;

  @Output() sendClick = new EventEmitter();

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatTable<any>;

  public loading = true;
  public action = false;
  public displayedColumnsObject: any[] = [];
  public dados;

  constructor() {}

  ngOnChanges(): void {
    if (this.displayedColumns) {
      this.addActionColumn();
    }
    if (this.dataSource) {
      this.createDatasource();
    }
  }

  createDatasource() {
    this.dados = new MatTableDataSource<any>(this.dataSource);
    this.dados.paginator = this.paginator;
    this.dados.sort = this.sort;
    this.showTable();
  }

  createColumns() {
    this.displayedColumnsObject = this.displayedColumns.map((col) =>
      typeof col.column === 'number' ? col.column.toString() : col.column
    );
    this.showTable();
  }

  showTable() {
    if (this.dados && this.displayedColumns && this.displayedColumnsObject) {
      this.loading = false;
    }
  }
  sendAction(action, row?, index?) {
    const content: any = { action, row, index };
    this.sendClick.emit(content);
  }
  addActionColumn() {
    if (this.actions) {
      const columnAction = { column: 'actions', title: 'Ações' };
      this.displayedColumns = [...this.displayedColumns, columnAction];
    }
    this.createColumns();
  }
}
