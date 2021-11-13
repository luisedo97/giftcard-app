import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftcardTemplatesListPageRoutingModule } from './giftcard-templates-list-routing.module';

import { GiftcardTemplatesListPage } from './giftcard-templates-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftcardTemplatesListPageRoutingModule
  ],
  declarations: [GiftcardTemplatesListPage]
})
export class GiftcardTemplatesListPageModule {}
