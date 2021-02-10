import { NgModule } from '@angular/core';
import { GridActionsComponent } from './grid-actions/grid-actions.component';
import { MasterDataComponent } from './master-data.component';
import { UpdateComponent } from './update/update.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MasterDataComponent,
    GridActionsComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [GridActionsComponent]
})
export class MasterDataModule {}
