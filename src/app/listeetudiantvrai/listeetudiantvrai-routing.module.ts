import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeetudiantvraiPage } from './listeetudiantvrai.page';

const routes: Routes = [
  {
    path: '',
    component: ListeetudiantvraiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeetudiantvraiPageRoutingModule {}
