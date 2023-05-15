import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarboletoPageRoutingModule } from './pagarboleto-routing.module';

import { PagarboletoPage } from './pagarboleto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarboletoPageRoutingModule
  ],
  declarations: [PagarboletoPage]
})
export class PagarboletoPageModule {}
