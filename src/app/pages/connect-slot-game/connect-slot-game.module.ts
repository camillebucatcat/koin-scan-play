import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectSlotGamePageRoutingModule } from './connect-slot-game-routing.module';

import { ConnectSlotGamePage } from './connect-slot-game.page';
import "@lottiefiles/lottie-player";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectSlotGamePageRoutingModule
  ],
  declarations: [ConnectSlotGamePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConnectSlotGamePageModule {}
