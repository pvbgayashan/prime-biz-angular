import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    ReactiveFormsModule
  ]
})
export class PricingModule {}
