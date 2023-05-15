import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequenciaPageRoutingModule } from './frequencia-routing.module';

import { FrequenciaPage } from './frequencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequenciaPageRoutingModule
  ],
  declarations: [FrequenciaPage]
})
export class FrequenciaPageModule {}
