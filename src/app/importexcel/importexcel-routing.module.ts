import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportexcelPage } from './importexcel.page';

const routes: Routes = [
  {
    path: '',
    component: ImportexcelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportexcelPageRoutingModule {}
