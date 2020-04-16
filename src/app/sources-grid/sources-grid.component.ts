import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-sources-grid',
  templateUrl: './sources-grid.component.html',
  styleUrls: ['./sources-grid.component.scss']
})
export class SourcesGridComponent implements OnInit {

  gridHeader :string = 'SOURCES';
  
  gridConfig = [];

  columnConfig = [
     {name:'checkbox',item:'',position:0},
     {name:'sourceName',item:'Source Name',position:1},
     {name:'publicationOfSource',item:'Publication of Source',position:2},
    ];
  
  publicationGridConfig = [{
    'addNewUserForm': {enable: true, token: 'add-new-user-form'},
    'enableActionToolbar' : {enable: true, token: 'enable-action-toolbar'},
    'enableSearchBar': {enable: true}
  }];

    userGridDataPromise: any;

    constructor(private http: HttpClient) { 
      this.gridConfig.push(this.gridHeader);
      this.gridConfig.push(this.columnConfig);
      this.gridConfig.push(this.publicationGridConfig);
    }

  ngOnInit() {
    // this.getFirstPage();
    this.userGridDataPromise=this.getPromiseSourceData();
  }

  getPromiseSourceData(): Promise<any>{
    console.log("In promise");
    let promise = new Promise((resolve, reject) => {
      Promise.all([
        {sourceName:"Echo di Bergamo", publicationOfSource:"single"},
        {sourceName:"Cronoca Qui", publicationOfSource:"single"},
        {sourceName:"Abitare", publicationOfSource:"single"},
        {sourceName:"Gazztta Matin", publicationOfSource:"single"},
        {sourceName:"Clociaria Oggi", publicationOfSource:"single"}

      ]).then(
            result => {
                console.log(result);
                resolve(result);
                console.log("inside then");
            },
            error => {
                console.log(error);
                reject(error);
            }
             );
       });
    return promise;
    
  }
}

