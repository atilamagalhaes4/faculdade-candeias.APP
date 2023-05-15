import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllpdfsPageRoutingModule } from './allpdfs-routing.module';

import { AllpdfsPage } from './allpdfs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllpdfsPageRoutingModule
  ],
  declarations: [AllpdfsPage]
})
export class AllpdfsPageModule {}
