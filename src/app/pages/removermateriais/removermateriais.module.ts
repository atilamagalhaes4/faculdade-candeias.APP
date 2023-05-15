import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemovermateriaisPageRoutingModule } from './removermateriais-routing.module';

import { RemovermateriaisPage } from './removermateriais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemovermateriaisPageRoutingModule
  ],
  declarations: [RemovermateriaisPage]
})
export class RemovermateriaisPageModule {}
