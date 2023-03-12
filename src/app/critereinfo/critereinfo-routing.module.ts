import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CritereinfoPage } from './critereinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CritereinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CritereinfoPageRoutingModule {}
