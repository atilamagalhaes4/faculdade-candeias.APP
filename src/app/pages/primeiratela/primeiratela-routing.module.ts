import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeiratelaPage } from './primeiratela.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeiratelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeiratelaPageRoutingModule {}
