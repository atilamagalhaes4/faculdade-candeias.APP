import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarpdfPage } from './pagarpdf.page';

const routes: Routes = [
  {
    path: '',
    component: PagarpdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarpdfPageRoutingModule {}
