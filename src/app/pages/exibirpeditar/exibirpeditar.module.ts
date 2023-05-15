import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExibirpeditarPageRoutingModule } from './exibirpeditar-routing.module';

import { ExibirpeditarPage } from './exibirpeditar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibirpeditarPageRoutingModule
  ],
  declarations: [ExibirpeditarPage]
})
export class ExibirpeditarPageModule {}
