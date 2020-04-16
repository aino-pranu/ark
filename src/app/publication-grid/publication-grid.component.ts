import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { DataService } from '../data.service';
import { promise } from 'protractor';
// import { IGridData } from '../griddata';
// import {DataService} from '../data.service';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication-grid',
  templateUrl: './publication-grid.component.html',
  styleUrls: ['./publication-grid.component.scss']
})

export class PublicationGridComponent implements OnInit{

  gridHeader :string = 'PUBLICATIONS';
  
  gridConfig = [];

  columnConfig = [
     {name:'checkbox',item:'',position:0},
     {name:'name',item:'Name',position:1},
     {name:'type',item:'Type',position:2},
     {name:'language',item:'Language',position:3},
     {name:'category',item:'Category',position:4},
     {name:'country',item:'Country',position:5},
     {name:'region',item:'Region',position:6},
     {name:'expiryDate',item:'Expiry Date',position:7}
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
    this.userGridDataPromise=this.getPromiseData();
  }

  getPromiseData(): Promise<any>{
    console.log("In promise");
    let promise = new Promise((resolve, reject) => {
      Promise.all([
        {name:"Echo di Bergamo", type:"NewsPaper",language:"Italian",category:"National NewsPapers", country:"Italy", region:"-", expiryDate:"5/09/2020"},
        {name:"Cronoca Qui", type:"NewsPaper",language:"Italian",category:"National NewsPapers", country:"Italy", region:"-", expiryDate:"07/10/2020"},
        {name:"Abitare", type:"Magzine",language:"Italian",category:"Other Magzine", country:"Italy",region:"-", expiryDate:"15/12/2020"},
        {name:"Gazztta Matin", type:"NewsPaper",language:"Italian",category:"Regional NewsPapers", country:"Italy",region:"-", expiryDate:"15/12/2020"},
        {name:"Clociaria Oggi", type:"NewsPaper",language:"Italian",category:"Regional NewsPapers", country:"Italy",region:"-", expiryDate:"15/12/2020"}

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

 // getFirstPage(){
  //   this.userGridDataPromise=this.dataService.getGridData();
  //   console.log(this.userGridDataPromise);
  // }

// public dataArray = []; 
  // public errorMsg;

  //gridConfig = [];
  // publicationGridDataPromise;

    // private gridApi;
  // private gridColumnApi;

// onGridReady(params){
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;
  //   let dataValue=[{"id":1, "name":"Pranali","designation":"Developer"}];
  //   params.api.setRowData(dataValue);
  //   // this.http.get("/assets/alldata/mockData.json")
  //   // .subscribe(data=>{params.api.setRowData(data);
  //   // })    
  // }

// ngOnInit() {
  //   this._dataservice.getData()
  //   .subscribe(data=> this.dataArray = data,
  //             error=> this.errorMsg = error);
  // }
  // private _dataservice:DataService, public _router:ActivatedRoute


// columnConfig = [
//   {name:'id', item:'Id', position:0},
//   {name:'name', item:'Name', position:1},
//   {name:'designation', item:'Designation', position:2}
// ]

// publicationGridConfig = [{
//   'id': {enable: true, token: 'id'},
//   'name' : {enable: true, token: 'name'},
//   'designation': {enable: true, token: 'designation'},
// }];
  
