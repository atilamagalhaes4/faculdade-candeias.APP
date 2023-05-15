import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceitarourejeitarPage } from './aceitarourejeitar.page';

const routes: Routes = [
  {
    path: '',
    component: AceitarourejeitarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AceitarourejeitarPageRoutingModule {}
