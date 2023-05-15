import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiratelaPageRoutingModule } from './primeiratela-routing.module';

import { PrimeiratelaPage } from './primeiratela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeiratelaPageRoutingModule
  ],
  declarations: [PrimeiratelaPage]
})
export class PrimeiratelaPageModule {}
