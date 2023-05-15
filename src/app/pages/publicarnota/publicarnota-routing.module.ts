import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarnotaPage } from './publicarnota.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarnotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarnotaPageRoutingModule {}
