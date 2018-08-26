import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OpenChallenge } from '../../viewmodels/challenges/OpenChallenge';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import 'ag-grid';


@Component({
  selector: 'betting-streams',
  templateUrl: 'betting-streams.component.html',
  styleUrls: ['./betting-streams.scss']
})
export class BettingStreamsComponent {

  columnDefs = [
    { headerName: 'Author', field: 'author', suppressFilter: true },
    { headerName: 'Category', field: 'category', filter: 'agTextColumnFilter', suppressFilter: true, width: 100 },
    { headerName: 'Viewers', field: 'reward', filter: 'agNumberColumnFilter', suppressFilter: true },
    { headerName: 'Open bets', field: 'openBets', filter: 'agNumberColumnFilter', suppressFilter: true },
    { headerName: 'Title', field: 'description', suppressFilter: true },  
    { headerName: 'Uptime', field: 'uptime', filter: 'agDateColumnFilter', suppressFilter: true }
  ];
  public tableData = [];
  public DisplayCreateForm = false;
  public CategoryFilter = "";

  private gridApi;
  private chellangesObervable: Observable<OpenChallenge[]>;

  public VidUrl: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {
    this.VidUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/JqPXMISUYYY");
    //this.chellangesObervable = this.requests.get<OpenChallenge[]>(urls.GetOpenChallenges);
    this.FetchOpenChallenges();
  }

  onGridChallengesReady(params) {
    this.gridApi = params.api;
  }

  showCreateForm() {
    this.DisplayCreateForm = !this.DisplayCreateForm;
  }

  private FetchOpenChallenges() {
    // this.chellangesObervable.subscribe(
    //   (data: OpenChallenge[]) => {
    //     this.tableData = data;
    //   });
  }

  ngAfterViewInit() {

  }


  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }


}
