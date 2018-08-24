import { Component, OnInit } from '@angular/core';
import { RequestsHelper } from '../../utils/requests-helper';
import { urls } from '../../../environments/apiUrls';
import { OpenChallenge } from '../../viewmodels/challenges/OpenChallenge';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import 'ag-grid';


@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  columnDefs = [
    { headerName: 'Category', field: 'category', filter: 'agTextColumnFilter', suppressFilter: true, width: 100 },
    { headerName: 'Winner reward', field: 'reward', filter: 'agNumberColumnFilter', suppressFilter: true },
    { headerName: 'Buy-in', field: 'buyin', filter: 'agNumberColumnFilter', suppressFilter: true },
    { headerName: 'Description', field: 'description', suppressFilter: true },
    { headerName: 'Author', field: 'author', suppressFilter: true },
    { headerName: 'Created', field: 'createdAt', filter: 'agDateColumnFilter', suppressFilter: true }
  ];
  public tableData = [];
  public DisplayCreateForm = false;
  public CategoryFilter = "";

  private gridApi;
  private chellangesObervable: Observable<OpenChallenge[]>;

  constructor(private requests: RequestsHelper) {
    this.chellangesObervable = this.requests.get<OpenChallenge[]>(urls.GetOpenChallenges);
    this.FetchOpenChallenges();
  }

  ngOnInit() {

  }

  showCreateForm() {
    this.DisplayCreateForm = !this.DisplayCreateForm;
  }

  applyFilter() {
    var categoryFilterComponent = this.gridApi.getFilterInstance('category');
    categoryFilterComponent.setModel({
      type: 'contains',
      filter: this.CategoryFilter
    });
    categoryFilterComponent.onFilterChanged();
  }

  onGridChallengesReady(params) {
    this.gridApi = params.api;
  }

  private FetchOpenChallenges() {
    this.chellangesObervable.subscribe(
      (data: OpenChallenge[]) => {
        this.tableData = data;
      });
  }
}
