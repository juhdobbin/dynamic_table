import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-table';
  public displayedColumns: any = [{ column: 'position', title: 'position' }, { column: 'name', title: 'name' }, { column: 'weight', title: 'weight' }];
  public dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  ];
  public actions = [{ column: 'read', title: 'read' }, { column: 'update', title: 'update' },{ column: 'delete', title: 'delete' }]
}
