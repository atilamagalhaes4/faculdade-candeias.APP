import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrequenciaPage } from './frequencia.page';

const routes: Routes = [
  {
    path: '',
    component: FrequenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrequenciaPageRoutingModule {}
