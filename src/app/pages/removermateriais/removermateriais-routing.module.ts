import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemovermateriaisPage } from './removermateriais.page';

const routes: Routes = [
  {
    path: '',
    component: RemovermateriaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemovermateriaisPageRoutingModule {}
