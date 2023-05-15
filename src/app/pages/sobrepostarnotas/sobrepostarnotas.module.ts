import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrepostarnotasPageRoutingModule } from './sobrepostarnotas-routing.module';

import { SobrepostarnotasPage } from './sobrepostarnotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrepostarnotasPageRoutingModule
  ],
  declarations: [SobrepostarnotasPage]
})
export class SobrepostarnotasPageModule {}
