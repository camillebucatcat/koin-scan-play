import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanToPlayPage } from './scan-to-play.page';

const routes: Routes = [
  {
    path: '',
    component: ScanToPlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanToPlayPageRoutingModule {}
