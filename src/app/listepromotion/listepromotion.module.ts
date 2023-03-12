import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListepromotionPageRoutingModule } from './listepromotion-routing.module';

import { ListepromotionPage } from './listepromotion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListepromotionPageRoutingModule
  ],
  declarations: [ListepromotionPage]
})
export class ListepromotionPageModule {}
