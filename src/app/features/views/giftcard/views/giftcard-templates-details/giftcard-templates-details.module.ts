import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftcardTemplatesDetailsPageRoutingModule } from './giftcard-templates-details-routing.module';

import { GiftcardTemplatesDetailsPage } from './giftcard-templates-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftcardTemplatesDetailsPageRoutingModule
  ],
  declarations: [GiftcardTemplatesDetailsPage]
})
export class GiftcardTemplatesDetailsPageModule {}
