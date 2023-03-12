import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeformationPageRoutingModule } from './listeformation-routing.module';

import { ListeformationPage } from './listeformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeformationPageRoutingModule
  ],
  declarations: [ListeformationPage]
})
export class ListeformationPageModule {}
