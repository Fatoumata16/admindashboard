import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeformationPage } from './listeformation.page';

const routes: Routes = [
  {
    path: '',
    component: ListeformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeformationPageRoutingModule {}
