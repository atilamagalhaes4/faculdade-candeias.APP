import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizartodosPageRoutingModule } from './visualizartodos-routing.module';

import { VisualizartodosPage } from './visualizartodos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizartodosPageRoutingModule
  ],
  declarations: [VisualizartodosPage]
})
export class VisualizartodosPageModule {}
