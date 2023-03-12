import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeetudiantvraiPageRoutingModule } from './listeetudiantvrai-routing.module';

import { ListeetudiantvraiPage } from './listeetudiantvrai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeetudiantvraiPageRoutingModule
  ],
  declarations: [ListeetudiantvraiPage]
})
export class ListeetudiantvraiPageModule {}
