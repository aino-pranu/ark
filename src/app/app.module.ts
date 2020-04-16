import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EnterpriseGridModule} from '@Ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationGridComponent } from './publication-grid/publication-grid.component';
import { SourcesGridComponent } from './sources-grid/sources-grid.component';
import {DataService} from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PublicationGridComponent,
    SourcesGridComponent
  ],
  imports: [
    BrowserModule,
    EnterpriseGridModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
