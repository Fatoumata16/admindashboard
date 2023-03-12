import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutjuryPage } from './ajoutjury.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutjuryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutjuryPageRoutingModule {}
