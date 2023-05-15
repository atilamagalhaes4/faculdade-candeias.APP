import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimsenhorPageRoutingModule } from './simsenhor-routing.module';

import { SimsenhorPage } from './simsenhor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimsenhorPageRoutingModule
  ],
  declarations: [SimsenhorPage]
})
export class SimsenhorPageModule {}
