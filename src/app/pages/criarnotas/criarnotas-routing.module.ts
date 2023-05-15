import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarnotasPage } from './criarnotas.page';

const routes: Routes = [
  {
    path: '',
    component: CriarnotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarnotasPageRoutingModule {}
