import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanToPlayPageRoutingModule } from './scan-to-play-routing.module';

import { ScanToPlayPage } from './scan-to-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanToPlayPageRoutingModule
  ],
  declarations: [ScanToPlayPage]
})
export class ScanToPlayPageModule {}
