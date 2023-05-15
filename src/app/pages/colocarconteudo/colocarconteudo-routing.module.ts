import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColocarconteudoPage } from './colocarconteudo.page';

const routes: Routes = [
  {
    path: '',
    component: ColocarconteudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColocarconteudoPageRoutingModule {}
