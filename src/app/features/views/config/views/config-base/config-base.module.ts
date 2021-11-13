import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigBasePageRoutingModule } from './config-base-routing.module';

import { ConfigBasePage } from './config-base.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigBasePageRoutingModule
  ],
  declarations: [ConfigBasePage]
})
export class ConfigBasePageModule {}
