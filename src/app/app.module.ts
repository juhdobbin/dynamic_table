import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicTableButtonsComponent } from './dynamic-table/dynamic-table-buttons/dynamic-table-buttons.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxDynamicTableModule } from 'ngx-dynamic-table';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    DynamicTableButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatTooltipModule,
    NgxDynamicTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
