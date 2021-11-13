import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftcardCodesDetailsPage } from './giftcard-codes-details.page';

const routes: Routes = [
  {
    path: '',
    component: GiftcardCodesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftcardCodesDetailsPageRoutingModule {}
