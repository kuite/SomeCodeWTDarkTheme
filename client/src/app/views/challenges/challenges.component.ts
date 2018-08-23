import { Component, OnInit } from '@angular/core';
import { RequestsHelper } from '../../utils/requests-helper';
import { urls } from '../../../environments/apiUrls';
import { OpenChallenge } from '../../viewmodels/challenges/OpenChallenge';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  columnDefs = [
    { headerName: 'Category', field: 'category' },
    { headerName: 'Winner reward', field: 'reward' },
    { headerName: 'Buy-in', field: 'buyin' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Author', field: 'author' },
    { headerName: 'Created At', field: 'createdAt' }
  ];

  private chellangesObervable: Observable<OpenChallenge[]>;

  public tableData = [];

  constructor(private requests: RequestsHelper) {
    this.chellangesObervable = this.requests.get<OpenChallenge[]>(urls.GetOpenChallenges);
    this.FetchOpenChallenges();
  }

  ngOnInit() {

  }

  FetchOpenChallenges() {
    this.chellangesObervable.subscribe(
      (data: OpenChallenge[]) => {
        this.tableData = data;
      });
  }
}
