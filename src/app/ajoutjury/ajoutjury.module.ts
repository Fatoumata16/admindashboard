import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutjuryPageRoutingModule } from './ajoutjury-routing.module';

import { AjoutjuryPage } from './ajoutjury.page';

@NgModule({
    declarations: [AjoutjuryPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AjoutjuryPageRoutingModule,
       
      
    ]
})
export class AjoutjuryPageModule {}
