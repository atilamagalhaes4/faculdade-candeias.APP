import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListachamadasPageRoutingModule } from './listachamadas-routing.module';

import { ListachamadasPage } from './listachamadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListachamadasPageRoutingModule
  ],
  declarations: [ListachamadasPage]
})
export class ListachamadasPageModule {}
