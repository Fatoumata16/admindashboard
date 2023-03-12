import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CritereinfoPageRoutingModule } from './critereinfo-routing.module';

import { CritereinfoPage } from './critereinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CritereinfoPageRoutingModule
  ],
  declarations: [CritereinfoPage]
})
export class CritereinfoPageModule {}
