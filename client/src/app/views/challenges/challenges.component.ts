import { Component, OnInit } from '@angular/core';
import { RequestsHelper } from '../../utils/requests-helper';
import { urls } from '../../../environments/apiUrls';
import { OpenChallenge } from '../../viewmodels/OpenChallenge';


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


  public tableData = [];
  // {name: 'Niall', role: 'Developer'},
  // {name: 'Eamon', role: 'Manager'},
  // {name: 'Brian', role: 'Musician'},
  // {name: 'Kevin', role: 'Manager'}
  constructor(private requests: RequestsHelper) { 
    this.FetchOpenChallenges();
  }

  ngOnInit() {

  }

  FetchOpenChallenges(){
    let challenges = this.requests.get(urls.GetOpenChallenges).subscribe(
      (data: any) => {
        console.log(JSON.parse(data));
        this.tableData = JSON.parse(data);
    });
  }

}
