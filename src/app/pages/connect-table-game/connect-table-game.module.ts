import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectTableGamePageRoutingModule } from './connect-table-game-routing.module';

import { ConnectTableGamePage } from './connect-table-game.page';
import "@lottiefiles/lottie-player";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectTableGamePageRoutingModule
  ],
  declarations: [ConnectTableGamePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConnectTableGamePageModule {}
