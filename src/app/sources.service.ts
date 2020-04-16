import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ISourceData } from './sourcedata';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class SourcesService implements ISourceData{

  constructor(private http:HttpClient) { }

  sourceName:string;
    publicationOfSource:string;

    getSourceData(){
      const sourceData:ISourceData[]=[
        {sourceName:"Echo di Bergamo", publicationOfSource:"single"},
        {sourceName:"Cronoca Qui", publicationOfSource:"single"},
        {sourceName:"Abitare", publicationOfSource:"single"},
        {sourceName:"Gazztta Matin", publicationOfSource:"single"},
        {sourceName:"Clociaria Oggi", publicationOfSource:"single"}
      ];
      return {sourceData}
}
}
