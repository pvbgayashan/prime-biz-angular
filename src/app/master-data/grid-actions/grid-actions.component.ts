import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UpdateComponent } from '../update/update.component';
import { UpdateType } from '../../_shared/enum/update-type.enum';

@Component({
  selector: 'app-grid-actions',
  templateUrl: './grid-actions.component.html',
  styleUrls: ['./grid-actions.component.css']
})
export class GridActionsComponent implements OnInit {

  params: any;

  constructor(private bsModalService: BsModalService) {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams) {
    this.params = params;
  }

  view() {
    this.showUpdateModal(UpdateType.VIEW);
  }

  public edit() {
    this.showUpdateModal(UpdateType.EDIT);
  }

  public delete() {
    this.showUpdateModal(UpdateType.DELETE);
  }

  private showUpdateModal(updateType: UpdateType) {
    if (this.params && this.params.data) {
      const data = this.params.data;
      const params: any = {
        updateType: updateType,
        data: data
      };
      this.bsModalService.show(UpdateComponent, { initialState: params });
    }
  }

}
