import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IGridData } from './griddata';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IGridData{

// private _url : string = "/assets/alldata/mockData.json";

  constructor(private http:HttpClient) { }
    name:string;
    type:string;
    language:string;
    category:string;
    region:string;
    country:string;
    expiryDate:string;

  getGridData(){
  const gridData:IGridData[]=[
    {name:"Echo di Bergamo", type:"NewsPaper",language:"Italian",category:"National NewsPapers", country:"Italy", region:"-", expiryDate:"5/09/2020"},
    {name:"Cronoca Qui", type:"NewsPaper",language:"Italian",category:"National NewsPapers", country:"Italy", region:"-", expiryDate:"07/10/2020"},
    {name:"Abitare", type:"Magzine",language:"Italian",category:"Other Magzine", country:"Italy",region:"-", expiryDate:"15/12/2020"},
    {name:"Gazztta Matin", type:"NewsPaper",language:"Italian",category:"Regional NewsPapers", country:"Italy",region:"-", expiryDate:"15/12/2020"},
    {name:"Clociaria Oggi ", type:"NewsPaper",language:"Italian",category:"Regional NewsPapers", country:"Italy",region:"-", expiryDate:"15/12/2020"}
   ];
  return {gridData}
  }

}

// getData(): Observable<IGridData[]>{
  //   return this.http.get<IGridData[]>(this._url)
  //                   .catch(this.errorHandler);
  // }

  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw(error.message || "server Error");
  // }