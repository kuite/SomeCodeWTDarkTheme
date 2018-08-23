import { Component, OnInit } from '@angular/core';
import { RequestsHelper } from '../../utils/requests-helper';
import { urls } from '../../../environments/apiUrls';
import { OpenChallenge } from '../../viewmodels/challenges/OpenChallenge';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid';
import 'ag-grid';


@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  columnDefs = [
    { headerName: 'Category', field: 'category', filter: 'agTextColumnFilter', suppressFilter: true},
    { headerName: 'Winner reward', field: 'reward', filter: 'agNumberColumnFilter', suppressFilter: true},
    { headerName: 'Buy-in', field: 'buyin', filter: 'agNumberColumnFilter', suppressFilter: true},
    { headerName: 'Description', field: 'description', suppressFilter: true },
    { headerName: 'Author', field: 'author', suppressFilter: true },
    { headerName: 'Created At', field: 'createdAt', filter: 'agDateColumnFilter', suppressFilter: true}
  ];
  public tableData = [];
  public ErrorMessage = "";

  private gridApi;
  private gridOptions;
  private chellangesObervable: Observable<OpenChallenge[]>;

  constructor(private requests: RequestsHelper) {
    this.chellangesObervable = this.requests.get<OpenChallenge[]>(urls.GetOpenChallenges);
    this.FetchOpenChallenges();
  }

  ngOnInit() {

  }

  applyFilter() {
    var fm = this.gridApi.getFilterModel();
    var categoryFilterComponent = this.gridApi.getFilterInstance('category');
    //var categoryModel = categoryFilterComponent.getModel();
    categoryFilterComponent.setModel({
      type: 'contains',
      filter: 'other'
    });
    //categoryFilterComponent.setFilter('other');
    categoryFilterComponent.onFilterChanged();
  }

  onGridChallengesReady(params) {
    this.gridApi = params.api;
    this.gridOptions = params.api.gridCore.gridOptions;
  }

  private FetchOpenChallenges() {
    this.chellangesObervable.subscribe(
      (data: OpenChallenge[]) => {
        this.tableData = data;
      });
  }
}
