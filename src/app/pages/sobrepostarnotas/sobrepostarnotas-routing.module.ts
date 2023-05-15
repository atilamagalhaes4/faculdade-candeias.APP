import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrepostarnotasPage } from './sobrepostarnotas.page';

const routes: Routes = [
  {
    path: '',
    component: SobrepostarnotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrepostarnotasPageRoutingModule {}
