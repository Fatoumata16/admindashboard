import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutetudiantPage } from './ajoutetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutetudiantPageRoutingModule {}
