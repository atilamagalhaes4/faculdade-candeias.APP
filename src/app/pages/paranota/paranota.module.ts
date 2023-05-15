import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParanotaPageRoutingModule } from './paranota-routing.module';

import { ParanotaPage } from './paranota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParanotaPageRoutingModule
  ],
  declarations: [ParanotaPage]
})
export class ParanotaPageModule {}
