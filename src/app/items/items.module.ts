import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule {}
