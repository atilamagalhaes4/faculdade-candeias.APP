import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarpresencaPage } from './editarpresenca.page';

const routes: Routes = [
  {
    path: '',
    component: EditarpresencaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarpresencaPageRoutingModule {}
