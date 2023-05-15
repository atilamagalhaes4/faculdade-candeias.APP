import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarnotasPageRoutingModule } from './criarnotas-routing.module';

import { CriarnotasPage } from './criarnotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarnotasPageRoutingModule
  ],
  declarations: [CriarnotasPage]
})
export class CriarnotasPageModule {}
