import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDynamicTableComponent } from './ngx-dynamic-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [NgxDynamicTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    NgxDynamicTableComponent,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class NgxDynamicTableModule {}
