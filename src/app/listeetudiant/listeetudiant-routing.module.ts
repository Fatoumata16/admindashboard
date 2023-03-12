import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeetudiantPage } from './listeetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: ListeetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeetudiantPageRoutingModule {}
