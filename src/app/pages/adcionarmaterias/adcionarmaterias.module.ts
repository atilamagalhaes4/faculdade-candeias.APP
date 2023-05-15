import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcionarmateriasPageRoutingModule } from './adcionarmaterias-routing.module';

import { AdcionarmateriasPage } from './adcionarmaterias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcionarmateriasPageRoutingModule
  ],
  declarations: [AdcionarmateriasPage]
})
export class AdcionarmateriasPageModule {}
