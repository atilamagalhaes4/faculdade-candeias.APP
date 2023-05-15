import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceitarourejeitarPageRoutingModule } from './aceitarourejeitar-routing.module';

import { AceitarourejeitarPage } from './aceitarourejeitar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceitarourejeitarPageRoutingModule
  ],
  declarations: [AceitarourejeitarPage]
})
export class AceitarourejeitarPageModule {}
