import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarpessoasPageRoutingModule } from './editarpessoas-routing.module';

import { EditarpessoasPage } from './editarpessoas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarpessoasPageRoutingModule
  ],
  declarations: [EditarpessoasPage]
})
export class EditarpessoasPageModule {}
