import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListepromotionPage } from './listepromotion.page';

const routes: Routes = [
  {
    path: '',
    component: ListepromotionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListepromotionPageRoutingModule {}
