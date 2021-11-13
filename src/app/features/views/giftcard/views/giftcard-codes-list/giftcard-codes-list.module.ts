import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftcardCodesListPageRoutingModule } from './giftcard-codes-list-routing.module';

import { GiftcardCodesListPage } from './giftcard-codes-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftcardCodesListPageRoutingModule
  ],
  declarations: [GiftcardCodesListPage]
})
export class GiftcardCodesListPageModule {}
