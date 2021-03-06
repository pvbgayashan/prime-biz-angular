import { Component, OnInit } from '@angular/core';
import { GridActionsComponent } from './grid-actions/grid-actions.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UpdateComponent } from './update/update.component';
import { SharedService } from '../_shared/services/shared.service';
import { environment } from '../../environments/environment';
import { MasterDataType } from '../_shared/enum/master-data-type.enum';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {

  public gridOptions: any;
  public gridApi: any;
  public rowData: any[] = [];
  public columnDefs: any[] = [];
  public defaultColDef: any;

  public masterDataTypes: any = MasterDataType;

  constructor(private masterDataStore: AngularFirestore,
              private bsModalService: BsModalService,
              private sharedService: SharedService) {

    // set grid options
    this.gridOptions = {
      context: {
        parent: this
      }
    };

    // set default col definition
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      filter: true,
      sortable: true,
      floatingFilter: true
    };

  }

  ngOnInit(): void {

    // set column defs
    this.setColumns();

    // load data
    this.loadData();

  }

  gridReadyEvent(params: any) {
    this.gridApi = params.api;

    // adjust column sizes to fit
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();
    }
  }

  private setColumns() {
    this.columnDefs = [
      {
        headerName: 'Name',
        field: 'name',
        filter: 'agTextColumnFilter',
        suppressMenu: true
      },
      {
        headerName: 'Active',
        field: 'active',
        filter: 'agTextColumnFilter',
        suppressMenu: true
      },
      {
        headerName: 'Actions',
        field: 'actions',
        floatingFilter: false,
        suppressMenu: true,
        cellRendererFramework: GridActionsComponent
      }
    ];
  }

  private loadData() {
    const collection = environment.COLLECTION.MASTER_DATA.ITEM_TYPE;
    this.masterDataStore
      .collection(collection)
      .snapshotChanges()
      .subscribe((response) => {
          if (response) {
            this.rowData = this.sharedService.constructDataWithId(response);
          }
        },
        (error: Error) => {
          console.log(error);
        }
      );
  }

  public new() {
    this.bsModalService.show(UpdateComponent);
  }

}
