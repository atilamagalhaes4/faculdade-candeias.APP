import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerminhasnotasPageRoutingModule } from './verminhasnotas-routing.module';

import { VerminhasnotasPage } from './verminhasnotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerminhasnotasPageRoutingModule
  ],
  declarations: [VerminhasnotasPage]
})
export class VerminhasnotasPageModule {}
