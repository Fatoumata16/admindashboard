import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutetudiantPageRoutingModule } from './ajoutetudiant-routing.module';

import { AjoutetudiantPage } from './ajoutetudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutetudiantPageRoutingModule
  ],
  declarations: [AjoutetudiantPage]
})
export class AjoutetudiantPageModule {}
