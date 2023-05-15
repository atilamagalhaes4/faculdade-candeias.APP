import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarpresencaPageRoutingModule } from './editarpresenca-routing.module';

import { EditarpresencaPage } from './editarpresenca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarpresencaPageRoutingModule
  ],
  declarations: [EditarpresencaPage]
})
export class EditarpresencaPageModule {}
