import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColocarconteudoPageRoutingModule } from './colocarconteudo-routing.module';

import { ColocarconteudoPage } from './colocarconteudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColocarconteudoPageRoutingModule
  ],
  declarations: [ColocarconteudoPage]
})
export class ColocarconteudoPageModule {}
