import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcionarmateriasPage } from './adcionarmaterias.page';

const routes: Routes = [
  {
    path: '',
    component: AdcionarmateriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcionarmateriasPageRoutingModule {}
