import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimsenhorPage } from './simsenhor.page';

const routes: Routes = [
  {
    path: '',
    component: SimsenhorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimsenhorPageRoutingModule {}
