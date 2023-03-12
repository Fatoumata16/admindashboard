import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreersoutenancePageRoutingModule } from './creersoutenance-routing.module';

import { CreersoutenancePage } from './creersoutenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreersoutenancePageRoutingModule
  ],
  declarations: [CreersoutenancePage]
})
export class CreersoutenancePageModule {}
