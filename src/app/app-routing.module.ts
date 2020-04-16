import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationGridComponent } from './publication-grid/publication-grid.component';
import { SourcesGridComponent } from './sources-grid/sources-grid.component';

const routes: Routes = [
  {path:'sources', component: SourcesGridComponent},
  {path:'publications', component: PublicationGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[SourcesGridComponent,PublicationGridComponent];
