import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public gridOptions: any;
  public gridApi: any;
  public rowData: any[] = [];
  public columnDefs: any[] = [];
  public defaultColDef: any;

  constructor() {

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

    // set column definition
    this.setColumns();

    // load data
    this.loadData();

  }

  public gridReadyEvent(params: any) {
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
        suppressMenu: true
      }
    ];
  }

  private loadData() {}

  public new() {}

}
