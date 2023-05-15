import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarnotaPageRoutingModule } from './publicarnota-routing.module';

import { PublicarnotaPage } from './publicarnota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarnotaPageRoutingModule
  ],
  declarations: [PublicarnotaPage]
})
export class PublicarnotaPageModule {}
