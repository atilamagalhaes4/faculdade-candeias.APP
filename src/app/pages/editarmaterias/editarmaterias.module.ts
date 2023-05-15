import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarmateriasPageRoutingModule } from './editarmaterias-routing.module';

import { EditarmateriasPage } from './editarmaterias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarmateriasPageRoutingModule
  ],
  declarations: [EditarmateriasPage]
})
export class EditarmateriasPageModule {}
