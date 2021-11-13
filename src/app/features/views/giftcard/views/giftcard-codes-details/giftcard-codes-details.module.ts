import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftcardCodesDetailsPageRoutingModule } from './giftcard-codes-details-routing.module';

import { GiftcardCodesDetailsPage } from './giftcard-codes-details.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftcardCodesDetailsPageRoutingModule,
    QrCodeModule
  ],
  declarations: [
    GiftcardCodesDetailsPage
  ]
})
export class GiftcardCodesDetailsPageModule {}
