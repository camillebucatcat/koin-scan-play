import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectSlotGamePage } from './connect-slot-game.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectSlotGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectSlotGamePageRoutingModule {}
