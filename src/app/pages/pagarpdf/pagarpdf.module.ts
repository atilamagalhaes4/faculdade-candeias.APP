import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarpdfPageRoutingModule } from './pagarpdf-routing.module';

import { PagarpdfPage } from './pagarpdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarpdfPageRoutingModule
  ],
  declarations: [PagarpdfPage]
})
export class PagarpdfPageModule {}
