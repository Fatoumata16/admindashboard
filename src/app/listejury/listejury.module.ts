import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListejuryPageRoutingModule } from './listejury-routing.module';

import { ListejuryPage } from './listejury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListejuryPageRoutingModule
  ],
  declarations: [ListejuryPage]
})
export class ListejuryPageModule {}
