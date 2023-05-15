import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizartodosPage } from './visualizartodos.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizartodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizartodosPageRoutingModule {}
