import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectTableGamePage } from './connect-table-game.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectTableGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectTableGamePageRoutingModule {}
