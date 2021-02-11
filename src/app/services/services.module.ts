import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    ReactiveFormsModule
  ]
})
export class ServicesModule {}
