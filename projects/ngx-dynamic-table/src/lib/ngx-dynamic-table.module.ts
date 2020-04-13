import { NgModule } from '@angular/core';
import { NgxDynamicTableComponent } from './ngx-dynamic-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NgxDynamicTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [NgxDynamicTableComponent, MatTableModule, MatTooltipModule, MatIconModule]
})
export class NgxDynamicTableModule { }
