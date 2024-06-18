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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
