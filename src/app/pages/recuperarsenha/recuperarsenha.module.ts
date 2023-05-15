import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarsenhaPageRoutingModule } from './recuperarsenha-routing.module';

import { RecuperarsenhaPage } from './recuperarsenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarsenhaPageRoutingModule
  ],
  declarations: [RecuperarsenhaPage]
})
export class RecuperarsenhaPageModule {}
