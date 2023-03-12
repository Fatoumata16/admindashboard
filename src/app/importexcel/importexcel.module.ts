import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportexcelPageRoutingModule } from './importexcel-routing.module';

import { ImportexcelPage } from './importexcel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportexcelPageRoutingModule
  ],
  declarations: [ImportexcelPage]
})
export class ImportexcelPageModule {}
