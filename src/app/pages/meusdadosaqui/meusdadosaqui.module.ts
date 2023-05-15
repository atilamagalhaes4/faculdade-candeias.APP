import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusdadosaquiPageRoutingModule } from './meusdadosaqui-routing.module';

import { MeusdadosaquiPage } from './meusdadosaqui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusdadosaquiPageRoutingModule
  ],
  declarations: [MeusdadosaquiPage]
})
export class MeusdadosaquiPageModule {}
