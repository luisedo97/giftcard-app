import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftcardCodesDetailsPageRoutingModule } from './giftcard-codes-details-routing.module';

import { GiftcardCodesDetailsPage } from './giftcard-codes-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftcardCodesDetailsPageRoutingModule
  ],
  declarations: [GiftcardCodesDetailsPage]
})
export class GiftcardCodesDetailsPageModule {}
