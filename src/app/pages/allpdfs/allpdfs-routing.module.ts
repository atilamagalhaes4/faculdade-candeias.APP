import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllpdfsPage } from './allpdfs.page';

const routes: Routes = [
  {
    path: '',
    component: AllpdfsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllpdfsPageRoutingModule {}
