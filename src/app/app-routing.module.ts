import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'scan-to-play',
    pathMatch: 'full'
  },
  {
    path: 'scan-to-play',
    loadChildren: () => import('./pages/scan-to-play/scan-to-play.module').then( m => m.ScanToPlayPageModule)
  },
  {
    path: 'confirm-transaction',
    loadChildren: () => import('./pages/confirm-transaction/confirm-transaction.module').then( m => m.ConfirmTransactionPageModule)
  },
  {
    path: 'success-screen',
    loadChildren: () => import('./pages/success-screen/success-screen.module').then( m => m.SuccessScreenPageModule)
  },
  {
    path: 'connect-table-game',
    loadChildren: () => import('./pages/connect-table-game/connect-table-game.module').then( m => m.ConnectTableGamePageModule)
  },
  {
    path: 'connect-slot-game',
    loadChildren: () => import('./pages/connect-slot-game/connect-slot-game.module').then( m => m.ConnectSlotGamePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
