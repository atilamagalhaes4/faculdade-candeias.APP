import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarsenhaPage } from './recuperarsenha.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarsenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarsenhaPageRoutingModule {}
