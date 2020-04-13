import { Component, ViewChild, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export const buttonsConfig = {
  read: {
    icon: 'search',
    name: 'read',
    tooltip: 'Visualizar'
  },
  update: {
    icon: 'edit',
    name: 'edit',
    tooltip: 'Editar'
  },
  delete: {
    icon: 'delete',
    name: 'delete',
    tooltip: 'Excluir'
  },
  download:
  {
    icon: 'arrow_downward',
    name: 'download',
    tooltip: 'Download'
  }
}
@Component({
  selector: 'lib-ngx-dynamic-table',
  template: `
 
  <mat-table #table [dataSource]="dados" [hidden]="loading || !dados || !displayedColumns || !displayedColumnsObject">

  <ng-container *ngFor="let disCol of displayedColumns; let colIndex = index" matColumnDef="{{disCol.column}}">
    <th mat-header-cell *matHeaderCellDef> {{disCol.title}} </th>
    <td mat-cell *matCellDef="let element">
      <span *ngIf="disCol.column !== 'actions'; else blockActions">
      {{element[disCol.column]}}
      </span>
      <ng-template #blockActions>
        <ul>
            <li *ngFor="let action of actions">
                <a (click)="sendAction(action)" [matTooltip]="buttonsConfig[action.column].tooltip">
                    <mat-icon aria-hidden="false">{{buttonsConfig[action.column].icon}}</mat-icon>
                </a>
            </li> 
        </ul>
      </ng-template>
    </td>
  </ng-container>


  <tr mat-header-row *matHeaderRowDef="displayedColumnsObject"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumnsObject;"></tr>
</mat-table>


  `,
  styles: [
    `[hidden]: display:none;`
  ]
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

  constructor() { }

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
    this.showTable()
  }

  createColumns() {
    this.displayedColumnsObject = this.displayedColumns.map(col => typeof col.column === 'number' ? col.column.toString() : col.column);
    this.showTable()

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
      const columnAction = { column: 'actions', title: 'Ações' }
      this.displayedColumns = [...this.displayedColumns, columnAction];
    }
    this.createColumns();

  }

}
