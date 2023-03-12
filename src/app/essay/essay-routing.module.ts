import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssayPage } from './essay.page';

const routes: Routes = [
  {
    path: '',
    component: EssayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssayPageRoutingModule {}
