import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftcardTemplatesUpsertPageRoutingModule } from './giftcard-templates-upsert-routing.module';

import { GiftcardTemplatesUpsertPage } from './giftcard-templates-upsert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GiftcardTemplatesUpsertPageRoutingModule
  ],
  declarations: [GiftcardTemplatesUpsertPage]
})
export class GiftcardTemplatesUpsertPageModule {}
