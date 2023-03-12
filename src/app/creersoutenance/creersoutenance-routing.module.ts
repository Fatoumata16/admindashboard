import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreersoutenancePage } from './creersoutenance.page';

const routes: Routes = [
  {
    path: '',
    component: CreersoutenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreersoutenancePageRoutingModule {}
