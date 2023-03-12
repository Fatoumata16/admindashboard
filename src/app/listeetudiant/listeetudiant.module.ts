import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeetudiantPageRoutingModule } from './listeetudiant-routing.module';

import { ListeetudiantPage } from './listeetudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeetudiantPageRoutingModule
  ],
  declarations: [ListeetudiantPage]
})
export class ListeetudiantPageModule {}
